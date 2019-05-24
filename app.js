const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// Set db
const db = require('./data/download_count');

//middleware for JSON data
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//middleware for putting something when you post it
const methodOverride = require('method-override');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 13000;


// Add after body parser initialization!
app.use(expressValidator());

//must come below const app, but before routes
app.use(bodyParser.urlencoded({ extended: true }));

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

app.use(express.static('Public'));

// //heroku database.
mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/wicked'), { useNewUrlParser: true });

// local host database
// mongoose.connect('mongodb://localhost/pinterest');

//views middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(port);

let homepage;

// INDEX
    app.get('/', (req, res) => {
        homepage = true;
        res.render('index',{homepage});
        })

// ABOUT
    app.get('/about', (req, res) => {
        homepage = false;
        res.render('about',{homepage});
        })

// GRIMOIRE
    app.get('/grimoire', (req, res) => {
        homepage = false;
        res.render('grimoire',{homepage});
        })

// DOWNLOAD
    app.get('/download', (req, res) => {
        homepage = false;
        res.render('download',{homepage});
        })

module.exports = app;
