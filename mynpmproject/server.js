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

    for (let i = 0; i < users.length; i++) {
        if (users[i].name == id){
            res.json(users[i]);
        }
    }
})

app.delete('/users/delete/:id', (req, res) => {
    let id = req.params.id;

    for (let i = 0; i < users.length; i++) {
        if (users[i].name == id){
            users.splice(i, 1);
        }
    }
    res.json(users);
})

app.put('/users/add-attribute/:id', (req, res) => {
    let id = req.params.id;

    for (let i = 0; i < users.length; i++) {
        users[i][id] = '';
    }
    res.json(users);
})

app.put('/users/update-location/:id/:location', (req, res) => {
    let id = req.params.id;
    let location = req.params.location;

    for (let i = 0; i < users.length; i++) {
        if (users[i].name == id){
            users[i].location = location;
        }
    }
    res.json(users);
})

app.listen(3001, () => {
    console.log('listening on 3001');
})
