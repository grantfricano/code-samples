import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(5000, () => {
    console.log('App listening on port 5000');
})