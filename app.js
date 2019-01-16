const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//Load Keys
const keys = require('./config/keys');

//Map global promises
mongoose.Promise = global.Promise;

//Mongoose connect
mongoose.connect(keys.mongoURI, {
    //useMongoClient: true
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();

app.get('/', (req,res) => {
    res.send('Working');
});

app.use('/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});