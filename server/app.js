const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

//Load up Express + its dependencies
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static files directory to be hosted on server
app.use(express.static(path.join(__dirname,'..','client','build')));

// Set up CORS

var corsOptions=
{
    origin:"http://localhost:3000"
};

app.use(cors());

//SET UP ROUTES

// Set up items.js router
var itemsRouter = require('./routes/items');
app.use('/api/items/',itemsRouter);

// Set up listSettings.js router
var listSettingsRouter = require('./routes/settings');
app.use('/api/settings/',listSettingsRouter);

// CONNECT AND SET UP MongoDB + Mongoose

const db = require("./models");

db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connected to MongoDB database!");
    })
    .catch(err=>{
        console.log("Cannot connect to database!", err);
    })

module.exports = app;
