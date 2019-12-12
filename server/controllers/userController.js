const User = require('../models/userModel.js')

const userController = {};

userController.createUser = (req, res, next) => {
    // console.log('req.body is', req.body)
    const body = req.body
    // console.log('password', req.body.password)
    let query = {
        text:`INSERT INTO users (username, password, score)`,
        value: (body.username, body.password, 0)
} 
    User.query(query)
    .then(() => next())
    .catch((err) => {if(err) return next(err)})
};

userController.verifyUser = (req, res, next) => {
    // console.log(req.body.username)
    // console.log(req.body.password)
    const body = req.body
    let query = {
        text: `SELECT score
        FROM users
        WHERE username=$1
        AND password=$2`,
        values: [body.username, body.password]
    }

    User.query(query)
    .then(data => {
        if (!data) {return next('no user found')} else {
            res.locals.score = data
            return next()
        }})
        .catch((err) => {if (err) return next(err)})
};

userController.updateUser = (req, res, next) => {

    const body = req.body
    let query = {
        text: `
        UPDATE users
        SET score=$1
        WHERE username=$2
        AND password=$3`,
        values: [body.score, body.username, body.password]
    }

    User.query(query)
    .then((data) =>{
        if (!data) return next("no data found")
        return (next)
    }).catch((err) => {if (err) return next(err)})
}

module.exports = userController;