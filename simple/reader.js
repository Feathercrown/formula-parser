class Reader {

    line = 0;
    col = 0;
    index = 0;
    text = '';

    constructor(text){
        this.text = text;
    }

    peek(){
        if(this.index >= this.text.length){
            return null; //End of File
        }
        let char = this.text[this.index];
        return char === '\r' ? '\n' : char;
    }

    next(){
        let nextLine = ()=>{
            this.index += 1;
            this.line++;
            this.column = 0;
            return '\n';
        }

        if(this.index >= this.text.length){
            return null; //End of File
        }

        let char = this.text[this.index];
        if(char === '\n'){
            return nextLine();
        } else if(char === '\r'){
            if(this.text[this.index + 1] === '\n'){
                this.index++;
                return nextLine();
            } else {
                return nextLine();
            }
        } else {
            this.index += 1;
            this.column++;
            return char;
        }
    }

    error(){
        return {
            line: this.line,
            column: this.column
        };
    }

}

exports.Reader = Reader;