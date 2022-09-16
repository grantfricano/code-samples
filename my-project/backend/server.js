const express = require('express');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
const { application } = require('express');
const userRoutes = require('./routers/userRoutes');
const productRoutes = require('./routers/productRoutes');
const authenticationRoutes = require('./routers/authenticateRoutes');
const customLoggerMiddleware = require('./middleWares/customLoggerMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());

app.use(customLoggerMiddleware);

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/token', authenticationRoutes);

app.get('/views', (req, res) => {
    res.send('I am sending data'.repeat(1000));
})

app.listen(process.env.PORT, (req, res) => {
    console.log('Listening on ' + process.env.PORT);
})
