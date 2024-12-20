let { Reader } = require('./reader.js');

class Tokenizer {

    reader = null;

    keywords = ['d', 'kl', 'kh'];
    operators = ['+', '-', '/', '*', '(', ')', '[', ']', '{', '}', ',', '!', '%'];

    constructor(text){
        this.reader = new Reader(text);
    }

    next(){
        //skip whitespace and comments
        //determine current token type
        //read token
        //output token and token type
        let char = this.reader.peek();

        //Switch based on token starting character type
        //TODO: Add comment tokens?
        switch(this.getCharType(char)){
            case 'EOF':
                return {
                    isErr: false,
                    token: null
                };
            case 'whitespace':
                return this.readWhitespace();
            case 'number':
                return this.readNumber();
            case 'symbol':
                return this.readSymbol();
            case 'letter':
                return this.readWord();
            case 'emoji':
                process.exit(1);
                return this.error('Syntax Error', 'No emojis allowed');
            default:
                return this.error('Syntax Error', 'Unexpected token starting symbol');
        }
    }

    error(errorType, errorMessage){
        let { line, column } = this.reader.error();
        return {
            isErr: true,
            error: {
                display: `${errorType}: ${errorMessage} at (${line}, ${column})`,
                type: errorType,
                message: errorMessage,
                line: line,
                column: column
            }
        }
    }

    getCharType(char){ //TODO: Add constants? As a list defined with the formula instead of being passed in as a variable? Eg. `2*5+3*FOO; FOO=4`
        if(char === null){
            return 'EOF'; //End of File

        } else if(/\s/.test(char)){
            return 'whitespace';

        } else if(/[0-9]/.test(char)){
            return 'number';

        } else if(/\./.test(char)){
            return 'decimalPoint';

        } else if(this.operators.includes(char)){
            return 'symbol';

        } else if(/[a-z_]/i.test(char)){
            return 'letter';

        } else if(/\p{Extended_Pictographic}/u.test(char)){ //Emojis lmao
            return 'emoji';

        } else {
            return 'unknown';
        }
    }

    readWhitespace(){
        this.reader.next();
        return this.next();
    }

    readNumber(){
        let hasDecimal = false;
        let token = '';
        let char = this.reader.peek();
        while(this.getCharType(char) === 'number' || (this.getCharType(char) === 'decimalPoint' && !hasDecimal)){
            token += this.reader.next();
            char = this.reader.peek();
        }
        return {
            isErr: false,
            token: {
                type: 'number',
                value: token
            }
        }; //TODO: Implement check for 3.2.1 so that it throws an error here, not in tokenizer.next()?
    }

    readSymbol(){
        return {
            isErr: false,
            token: {
                type: 'operator',
                value: this.reader.next()
            }
        };
    }

    readWord(){
        let token = '';
        let char = this.reader.peek();
        while(this.getCharType(char) === 'letter'){
            token += this.reader.next();
            char = this.reader.peek();
        }
        if(this.keywords.includes(token)){
            return {
                isErr: false,
                token: {
                    type: 'keyword',
                    value: token
                }
            };
        } else {
            return {
                isErr: false,
                token: {
                    type: 'variable',
                    value: token
                }
            };
        }
    }

}

exports.Tokenizer = Tokenizer;