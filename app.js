//app.js

const express = require("express");
//const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const fs = require('fs');

const Note = require("./model/mongoose");


//---------------------------------------------------------
var silence = new Note({ title: 'Silence' });
console.log(`silence name: ${silence.title}`); // 'Silence'

silence.save(function (err, silence) {
  if (err) return console.error(`MongoDB Error ${err}`);
  console.log("silence saved to db.");
});
//---------------------------------------------------------

const app = express();

// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream( `${__dirname}/logs/morgan.log`, {flags: 'a'});




const port = process.env.PORT || 3000;
//console.log(process.env.PORT);
//in linux, from bash, >export PORT=8080

const routes = require('./routes'); //routes.js


// You can set morgan to log differently depending on environment
if (app.get('env') == 'production') {
    //only stream to log if statusCode greater than 400, eg. 404
    app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: accessLogStream }));
  } else {
    //are not in production, so log everything to screen console, for development and bug fixing
    app.use(morgan('dev'));
  } 

// load the cookie-parsing middleware
//app.use(cookieParser());

app.use(routes);

app.listen(port, () => console.log(`frankApi listening on port ${port}`));