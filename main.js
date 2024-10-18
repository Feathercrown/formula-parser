let { Parser } = require('./parser.js');
let parser = new Parser();
console.log(parser);
console.log(parser.parseFile('./input.txt'));
parser.display();