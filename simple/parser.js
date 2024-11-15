let { Tokenizer } = require('./tokenizer.js');

class Parser {

    constructor(){}

    parseFile(filePath){
        let fileContents = fs.readFileSync(filePath).toString();
        return this.parseText(fileContents)
    }

    parseText(text){
        let tokenizer = new Tokenizer(text);
        let curToken = null;
        let nextToken = null;

    }

    display(){}

}

exports.Parser = Parser;