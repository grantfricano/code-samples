const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let updateUserIdMiddleware = (req, res, next) => {

    let user = req.body;
    user.id = Math.floor(Math.random() * 100);
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
app.use(customLoggerMiddleware);

let users = [];

let ValidateJWTTokenMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if(token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY);
            next();
        } catch(e){
            res.status(403).send('Forbidden');
        }
    }
    else {
        res.status(401).send('Unauthorized');
    }
}

app.post('/token', (req, res) => {
    if(req.body.username === 'admin' && req.body.password === 'admin@123') {
        const payload = {
            username: 'admin',
            age: 35,
            id: 123
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
        res.send({token: token});
    }
    else {
        res.status(400).send('Invalid username or password.');
    }
})

app.get('/users', ValidateJWTTokenMiddleware, (req, res) => {
    res.json(users);
})

app.post('/users', ValidateJWTTokenMiddleware, updateUserIdMiddleware, (req, res) => {
    users.push(req.body);
    res.json(users);
})

app.put('/users', ValidateJWTTokenMiddleware, (req, res) => {
    let updatedUser = req.body;
    let userIndex = users.findIndex((user)=> user.id == updatedUser.id);
    users[userIndex] = updatedUser;
    res.json(users);
})

app.get('/users/:id', ValidateJWTTokenMiddleware, (req, res) => {
    let user = users.find((u) => u.id == req.params.id);
    res.json(user);
})

app.delete('/users/:id', ValidateJWTTokenMiddleware, (req, res) => {
    let userIndex = users.findIndex((u) => u.id == req.params.id);
    users.splice(userIndex, 1);
    res.json(users);
})

app.listen(process.env.PORT, (req, res) => {
    console.log('Listening on ' + process.env.PORT);
})
