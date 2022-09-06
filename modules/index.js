const Calculator = require('./calculator');
const printString = require('./print-value');
const fs = require('fs');

let calc = new Calculator(2,3);
console.log('Add 2 + 3 = ' + calc.add())

fs.readFile('./sample.txt', 'utf8', (err, data)=>{
    console.log(data);
})

printString('this is the print string output');
