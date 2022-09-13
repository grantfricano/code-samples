import express from 'express';

const app = express();

app.set('view engine', 'ejs');

let customeLoggerMiddleware = (req, res, next) => {
    var date = new Date();

    console.log(date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2)
    + `${req.method} ${req.url} ${res.statusCode} `);
    next();
}

app.use(customeLoggerMiddleware);

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.get('/about', (req, res) => {
    res.render('pages/about', {name: 'grant'});
})

app.get('/students', (req, res) => {
    const students = [{name: 'Arin'}, {name: 'Dipesh'}, {name: 'Grant'}];
    res.render('pages/students', {students: students});
})

app.get('/profile', (req, res) => {
    res.render('pages/profile');
})

app.get('/skills', (req, res) => {
    const skills = [{skill: 'programming'}, {skill: 'video games'}, {skill: 'working out'}];
    res.render('pages/skills', {skills: skills});
})

app.get('/contactus', (req, res) => {
    const details = {phoneNumber: '5551112222', emailAddress: 'grant.fricano@gmail.com', address: '123 first st'};
    res.render('pages/contactus', {details: details});
})

app.listen(5000, () => {
    console.log('app listening on port 5000');
})