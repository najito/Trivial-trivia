const fetch = require('node-fetch');

const triviaController = {};

triviaController.getQuestions = ((req, res, next) => {
    fetch("http://jservice.io/api/random?count=100")
    .then(data => data.json())
    .then((data) => {
        res.locals.newQuestions = data;
        return next()
    })
    .catch(() => next({log: 'triviaController: unable to retrieve new questions'}));
})

module.exports = triviaController;