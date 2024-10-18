let { Parser } = require('./parser.js');
let parser = new Parser();

parser.parseFile('./input.txt');
parser.display();
