const User = require('../models/userModel.js')

const userController = {};

userController.createUser = (req, res, next) => {
    // console.log('req.body is', req.body)
    // console.log('password', req.body.password)
    User.create({
        username: req.body.username,
        password:req.body.password,
        score: 0
    }, (err) => {
        if (err) {
            return next(err)
        }
        return next()
    })
};

userController.verifyUser = (req, res, next) => {
    // console.log(req.body.username)
    // console.log(req.body.password)
    User.findOne({username: req.body.username, password: req.body.password}, (err, data) => {
        if (err || !data) {
            if (err) {
                return next(err)
            }
            return next("no data found")
        }
        res.locals.score = data.score
        return next();
    })
};

userController.updateUser = (req, res, next) => {
    User.findOneAndUpdate({username:req.body.username, password: req.body.password}, {score: req.body.score}, {new: true}, (err, data) => {
        if (err || !data) {
            if (err) {
                return next(err)
            }
            return next("no data found")
        }
        return next()
    })
}

module.exports = userController;