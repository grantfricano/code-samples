import express, { application, json } from 'express';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

let users = [];
app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', (req, res) => {
    users.push(req.body);
    console.log(users);

    res.json(users);
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    console.log('id: ' + id);

    for (let i = 0; i < users.length; i++) {
        if (users[i].name == id){
            res.json(users[i]);
        }
    }
})

app.listen(3001, () => {
    console.log('listening on 3001');
})
