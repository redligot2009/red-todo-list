const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Set up mongoose connection
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb+srv://redligot2009:8aPeu6TEAXq2YaB9!@cluster0.1irfl.mongodb.net/red-todo-list?retryWrites=true&w=majority';
// //"mongodb+srv://redligot2009:<password>@cluster0.1irfl.mongodb.net/<dbname>?retryWrites=true&w=majority"
// mongoose.connect(mongoDB, {useNewUrlParser:true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console,'MongoDB connection error: '));

// db.on('connected',(err, res) => {
//     console.log("mongoose is connected")
// });

//Routes
var itemsRouter = require('./routes/items');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','client','build')));

// Set up CORS

var corsOptions=
{
    origin:"http://localhost:3000"
};

app.use(cors());

// Set up items.js router
app.use('/api/items/',itemsRouter);

// Set up MongoDB + Mongoose

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
