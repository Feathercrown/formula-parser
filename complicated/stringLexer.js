class StringLexer {

    line = 0;
    column = 0;
    charIndex = 0;
    text = '';

    constructor(string){
        this.text = string;
    }

    next(){
        if(this.charIndex >= this.text.length){
            return null; //End of File
        }

        let char = this.text[this.charIndex];
        if(char === '\n'){
            this.charIndex += 1;
            this.line++;
            this.column = 0;
            return '\n';
        } else if(char === '\r'){
            if(this.text[this.charIndex + 1] === '\n'){
                this.charIndex += 2;
                this.line++;
                this.column = 0;
                return '\n';
            } else {
                this.charIndex += 1;
                this.line++;
                this.column = 0;
                return '\n';
            }
        } else {
            this.charIndex += 1;
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

exports.StringLexer = StringLexer;