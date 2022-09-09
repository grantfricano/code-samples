import express, { application, json } from 'express';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

let users = [];
let companies = [];

 app.get('/companies/', (req, res) => {
    res.json(companies);
})

app.post('/companies', (req, res) => {
    companies.push(req.body);
    res.json(companies);
})

app.delete('/companies/:companyId', (req, res) => {
    let companyId = req.params.companyId

    const companyIndex = companies.findIndex( (company)=>company.companyId == companyId);

    // if the company is found this will delete the company 
    // and any users who were associated with it
    if (companyIndex >= 0) {
        companies.splice(companyIndex, 1);
        users.forEach(user => {
            if (user.companyId == companyId) {
                users.splice(users.indexOf(user));
            }
        });
        res.json(companies);
    }
    else {
        res.json({error: 'company is undefined'});
    }
})

app.get('/companies/:companyId', (req, res) => {
    let companyId = req.params.companyId

    const companyIndex = companies.findIndex((company)=>company.companyId == companyId);

    if (companyIndex >= 0) {
        res.json(companies[companyIndex]);
    }
    else {
        res.json({error: 'company is undefined'});
    }
})

app.get('/companies/:companyId/users', (req, res) => {
    let companyId = req.params.companyId
    let usersInCompany = [];
    
    users.forEach(user => {
        if (user.companyId == companyId) { 
            usersInCompany.push(user);
        }
    });
    res.json(usersInCompany);

})

app.post('/companies/:companyId/users', (req, res) => {
    const newBody = {
        companyId: req.params.companyId,
        ...req.body
    }      

    users.push(newBody);
    res.json(users);
})

app.get('/companies/:companyId/users/:userId', (req, res) => {
    let userId = req.params.userId;
    let companyId = req.params.companyId;

    const userIndex = users.findIndex((user)=>user.id == userId && user.companyId == companyId);

    if (userIndex >= 0) {
        res.json(users[userIndex]);
    }
    else {
        res.json({error: 'user is undefined'});
    }

})

app.delete('/companies/:companyId/users/:userId', (req, res) => {
    let userId = req.params.userId;
    let companyId = req.params.companyId;

    const userIndex = users.findIndex((user)=>user.id == userId && user.companyId == companyId);

    if (userIndex >= 0) {
        users.splice(userIndex, 1);
        res.json(users);
    }
    else {
        res.json({error: 'user is undefined'});
    }
})

app.put('/companies/:companyId/users/:userId', (req, res) => {
    
    let userId = req.params.userId;
    let companyId = req.params.companyId;

    const newBody = {
        companyId: req.params.companyId,
        ...req.body
    }   

    let userIndex = users.findIndex((user)=>user.id == userId && user.companyId == companyId);
    
    if (userIndex >= 0){ 
        users[userIndex] = newBody; 
        res.json(users);
    }
    else {
        res.json({error: 'user is undefined'});
    }
})

app.listen(3001, () => {
    console.log('listening on 3001');
})


// questions 
// subtle differences in syntax that i see