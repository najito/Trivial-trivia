const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const userController = require('./controllers/userController');
const triviaController = require('./controllers/triviaController');

const PORT = 3000;
const MONGO_URI = 'mongodb+srv://Innovator:Theredshield013@cluster0-b1arx.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'trivialtrivia'   
})
.then(()=> console.log('Connected to Mongo'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('.'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/assets/index.html'))
})
//static files
app.get('/api', triviaController.getQuestions, (req, res) => {
    res.status(200).json(res.locals.newQuestions)
})

app.post('/signup', userController.createUser, (req, res) => {
    res.status(200).send('user created')
});

app.post('/login', userController.verifyUser, (req, res) => {
    res.status(200).json({score: res.locals.score, message: 'user found'})
})

app.post('/logout', userController.updateUser, (req, res) => {
    res.sendStatus(200)
})


app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send('Server Error');
  });

  app.listen(PORT, () => { console.log(`Listening on port ${PORT}`);});