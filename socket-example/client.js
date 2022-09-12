import net from 'node:net';


const client = net.createConnection({
    port: '8000'
})

client.on('data', (data) =>{
    console.log('data from server'  + data);
});

client.on('error', (error) => {
    console.log('client error is ' + error);
})

//client.write(8);

