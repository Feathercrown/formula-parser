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
    var { isErr, error, token } = tokenizer.next();
    if (isErr) {
        console.error(error);
        break; //Stop reading tokens
    } else {
        console.log(token);
    }
} while (token !== null);