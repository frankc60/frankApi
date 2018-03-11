/** @prettier */
const express = require("express");
//const bodyParser = require('body-parser');
const morgan = require("morgan");
const fs = require("fs"); //so can write to file.

const app = express();

// You can set morgan to log differently depending on environment
if (app.get("env") == "production") {
    //production, so only stream to log if statusCode greater than 400, eg. 404
    // create a write stream (in append mode)
    let accessLogStream = fs.createWriteStream(`${__dirname}/../logs/morgan.log`, { flags: "a" });
    app.use(
        morgan("common", {
            skip: function(req, res) {
                return res.statusCode < 400;
            },
            stream: accessLogStream
        })
    );
} else {
    //are not in production, so log everything to screen console, for development and bug fixing
    app.use(morgan("dev"));
}
//--------------------------------------------------------------------------------------------

module.exports = app;
