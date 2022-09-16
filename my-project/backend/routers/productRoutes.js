const express = require('express');
const updateProductIdMiddleware = require('../middleWares/updateProductIdMiddleware');
const ValidateJWTTokenMiddleware = require('../middleWares/validateJWTTokenMiddleware');
const productRoutes = express.Router();

productRoutes.use(ValidateJWTTokenMiddleware);
productRoutes.use(updateProductIdMiddleware);

let products = [];

productRoutes.get('/', (req, res) => {
    res.json(products);
})

productRoutes.post('/', (req, res) => {
    products.push(req.body);
    res.json(products);
})

productRoutes.put('/', (req, res) => {
    let updatedProdct = req.body;
    let productIndex = products.findIndex(product => product.id === updatedProdct.id);
    products[productIndex] = updatedProdct;
    res.json(products);
})

productRoutes.get('/:id', (req, res) => {
    let product = products.find(product => product.id === req.params.id);
    res.json(product);
})

productRoutes.delete('/:id', (req, res) => {
    let productIndex = products.findIndex(product => product.id === req.params.id);
    products.splice(productIndex, 1);
    res.json(products);
})

module.exports = productRoutes;