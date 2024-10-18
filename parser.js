let fs = require('fs');

class Parser {

    constructor(){}

    parseText(text){
        return 'Test:\n'+text;
    }

    parseFile(filePath){
        let fileContents = fs.readFileSync(filePath).toString();
        return this.parseText(fileContents)
    }

    display(){}

}

exports.Parser = Parser;