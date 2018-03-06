//app.js
const express = require("express");
//const cookieParser = require('cookie-parser');

const morgan = require("./model/morgan");
const routes = require('./routes'); //routes.js

//---------------------------------------------------------

const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

//--------------------------------------------------------------------------------------------
//use middleware
app.use(morgan);
app.use("/",routes);




const port = process.env.PORT || 3000;
//console.log(process.env.PORT);
//in linux, from bash, >export PORT=8080

app.listen(port, () => console.log(`frankApi listening on port ${port}`));