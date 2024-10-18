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
    var token = tokenizer.next();
    console.log(token);
} while (token !== null);