import DisplayName, { DisplayAge } from './person.mjs';
import {readFile, writeFile, appendFile, unlink } from 'fs';
import http from 'node:http';

//const chalk = require('chalk');

//console.log('hello world');
//console.log(chalk.red('hello world'));

//DisplayName('grant');
//DisplayAge(100);

// writeFile('./data.txt', 'this is the file contents', () => {
//     console.log('data has been written');
// })

// readFile('./data.txt', 'utf-8', (error, data) => {
//     console.log('the data is ' + data);
// })

http.createServer( function(request, response){

    response.writeHead(200, {'Content-Type': 'text/html'});
    
    
    if (request.url === '/') {
        readFile('./html/root.html', 'utf-8', (error, data)=>{
            response.write(data);
            return response.end();
        })
    }
    else if (request.url === '/other') {
        readFile('./html/other.html', 'utf-8', (error, data)=>{
            response.write(data);
            return response.end();
        })
    }
    

}).listen(8081, ()=>{
    console.log('server running on 8081');
})