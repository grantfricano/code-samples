let updateUserIdMiddleware = (req, res, next) => {
    let user = req.body;
    user.id = Math.floor(Math.random() * 100);
    next();
}

module.exports = updateUserIdMiddleware;