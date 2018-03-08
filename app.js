//app.js
const express = require("express");
//const cookieParser = require('cookie-parser');

const morgan = require("./model/morgan");
const routes = require('./routes'); //routes.js
const favicon = require('serve-favicon');
const compression = require('compression');
//---------------------------------------------------------


const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

//--------------------------------------------------------------------------------------------
//use middleware
app.disable('x-powered-by'); //security 

app.use(compression());
app.use(morgan);

//app.use("/static", express.static('public'));
 
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use("/",routes);



const port = process.env.PORT || 3000;
//console.log(process.env.PORT);
//in linux, from bash, >export PORT=8080

app.listen(port, () => console.log(`frankApi listening on port ${port}`));