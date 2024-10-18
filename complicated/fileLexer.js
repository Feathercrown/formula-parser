let fs = require('fs');

class FileLexer {

    line = 0;
    column = 0;
    char = 0;
    file = '';

    constructor(filePath){
        this.file = fs.openSync(filePath, 'r');
    }

    next(){
        //fs.readSync(file,);
    }

    peek(){

    }

}

exports.FileLexer = FileLexer;