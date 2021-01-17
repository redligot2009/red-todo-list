const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

//  Set MongoDB Atlas URL to be used
db.url = dbConfig.url;

/*  Create new collection "items" which takes 
    in all Item documents created.
*/
db.items = require("./Item.js")(mongoose);

module.exports = db;