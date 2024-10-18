/*
let { Parser } = require('./parser.js');
let parser = new Parser();

parser.parseFile('./input.txt');
parser.display();
*/

let { StringLexer } = require('./stringLexer.js');
let lexer = new StringLexer('test');
console.log(lexer.next());
console.log(lexer.peek());
console.log(lexer.next());