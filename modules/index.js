const Calculator = require('./calculator');
const printString = require('./print-value');
const fs = require('fs');

let calc = new Calculator(2,3);
console.log('Add 2 + 3 = ' + calc.add())

fs.readFile('./samples.txt', 'utf8', (err, data)=>{
    
    if (err) {
        console.log('faile with error code : ' + err.code);
    }
    else { 
        console.log(data);
    }
})


printString('this is the print string output');
