let updateProductIdMiddleware = (req, res, next) => {
    let product = req.body;
    product.id = Math.floor(Math.random() * 100);
    next();
}

module.exports = updateProductIdMiddleware;
