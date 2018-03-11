/** @prettier */

//app.js
const express = require("express");
//const cookieParser = require('cookie-parser');

const morgan = require("./model/morgan");
const routes = require("./routes"); //routes.js
const favicon = require("serve-favicon");
const compression = require("compression");
//---------------------------------------------------------

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

//--------------------------------------------------------------------------------------------
//use middleware
app.disable("x-powered-by"); //security

app.use(compression());
app.use(morgan);

//app.use("/static", express.static('public'));

app.use(favicon(__dirname + "/public/images/favicon.ico"));

app.use("/", routes);
//if doesn't find route from above then if it returns and continues, it is a 404, handle below:
app.use(function(req, res, next) {
    //if we get here, then no other routes have got the route, so is a 404.
    res.status(404);
    res.send("error 404");
});

//console.log(process.env.PORT);
//in linux, from bash, >export PORT=8080

//app.listen(port, () => console.log(`frankApi listening on port ${port}`));

module.exports = app;
