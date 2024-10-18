/*
let { Parser } = require('./parser.js');
let parser = new Parser();

parser.parseFile('./input.txt');
parser.display();
*/

let fs = require('fs');
let { Tokenizer } = require('./tokenizer.js');
let tokenizer = new Tokenizer(fs.readFileSync('./input.txt').toString());
do {
    var [errorType, value] = tokenizer.next();
    if(errorType !== null){ //value = error (TODO: Remove this ambiguity)
        console.error(value);
        break;
    } else { //value = token
        console.log(value);
    }
} while (value !== null);