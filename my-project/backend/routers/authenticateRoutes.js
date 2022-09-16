const jwt = require('jsonwebtoken');
const express = require('express');
const authenticationRoutes = express.Router();

authenticationRoutes.post('/', (req, res) => {
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

module.exports = authenticationRoutes;