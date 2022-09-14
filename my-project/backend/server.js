const express = require('express');
const cors = require('cors');
const { application } = require('express');

const app = express();
app.use(cors());
app.use(express.json());

let updateUserId = (req, res, next) => {

    if (req.url == '/users/' && req.method == 'POST') {
        let user = req.body;
        user.id = Math.floor(Math.random() * 100);
    }
    next();
}

let customLoggerMiddleware = (req, res, next) => {
    var date = new Date();

    console.log(date.getFullYear() + '-' +
        ("0" + (date.getMonth() + 1)).slice(-2) + '-' + 
        ("0" + (date.getDate())).slice(-2) + ' ' + 
        ("0" + date.getHours()).slice(-2) + ':' + 
        ("0" + date.getMinutes()).slice(-2) + ':' + 
        ("0" + date.getSeconds()).slice(-2) + ' ' 
    + `${req.method} ${req.url} ${res.statusCode} `);
    next();
}

app.use(updateUserId);
app.use(customLoggerMiddleware)

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', (req, res) => {
    users.push(req.body);
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    let user = users.find((u) => u.id == req.params.id);
    res.json(user);
})

app.delete('/users/:id', (req, res) => {
    let userIndex = users.findIndex((u) => u.id == req.params.id);
    users.splice(userIndex, 1);
    res.json(users);
})

app.listen(5000, (req, res) => {
    console.log('Listening on port 5000');
})