import net from 'node:net';
import { EventEmitter } from 'node:stream';

const server = net.createServer((socket)=>{
    console.log('server connected');

    socket.on('data',(data)=> {
        console.log('Received data from Client DATA : ' + data.toString());
    });
});

let clients = [];
server.on('connection', (client) => {
    clients.push(client);
});

server.on('error', (error) => {
    console.log('server error is ' + error);
});

setInterval(() => {
    clients.forEach(client => {
        client.write('data' + Math.random());
    });
}, 2000)




server.listen({
    port: 8000,
    host: 'localhost',
});





