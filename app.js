//app.js

const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;
//console.log(process.env.PORT);
//in linux, from bash, export PORT=8080

const routes = require('./routes'); //routes.js

app.use(morgan('combined'));

// load the cookie-parsing middleware
app.use(cookieParser());

// load the body-parsing middleware
app.use(bodyParser());

app.use(routes);



app.listen(port, () => console.log(`Example app listening on port ${port}`))


