//routes.js

const express = require("express");
//const bodyParser = require('body-parser');

const app = express();

// load the body-parsing middleware
//app.use(bodyParser());


    //run for ALL requests
    app.use(function (req, res, next) {
        //console.log(`Timestamp: ${new Date(Date.now())}`);
        //morgan is displaying connection info!
        next();
    });

    app.get('/test', (req, res) => {
        res.send('happy days!');
    });


    app.get('/', (req, res) => {
        res.send('GET Hello World!');
    });

    app.post('/', (req, res) => {
        res.send('POST Hello World!');
    });

    app.delete('/', (req, res) => {
        res.send('DELETE Hello World!');
    });

    app.put('/', (req, res) => {
        res.send('PUT Hello World!');
    });

module.exports = app;