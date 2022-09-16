const express = require('express');
const updateUserIdMiddleware = require('../middleWares/updateUserIdMiddleware');
const ValidateJWTTokenMiddleware = require('../middleWares/validateJWTTokenMiddleware');
const userRoutes = express.Router();

let users = [];

userRoutes.use(ValidateJWTTokenMiddleware);
userRoutes.use(updateUserIdMiddleware);

userRoutes.get('/', (req, res) => {
    res.json(users);
})

userRoutes.post('/', (req, res) => {
    users.push(req.body);
    res.json(users);
})

userRoutes.put('/', (req, res) => {
    let updatedUser = req.body;
    let userIndex = users.findIndex((user)=> user.id == updatedUser.id);
    users[userIndex] = updatedUser;
    res.json(users);
})

userRoutes.get('/:id', (req, res) => {
    let user = users.find((u) => u.id == req.params.id);
    res.json(user);
})

userRoutes.delete('/:id', (req, res) => {
    let userIndex = users.findIndex((u) => u.id == req.params.id);
    users.splice(userIndex, 1);
    res.json(users);
})

module.exports = userRoutes;