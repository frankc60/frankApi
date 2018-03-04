//routes.js
const Note = require("./model/mongoose");

const express   =   require("express");
const bodyParser  =   require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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
        let note = req.body;
        res.send('POST Hello World! ' + JSON.stringify(note));
        //---------------------------------------------------------
        var postNote = new Note(note);
        console.log(`postNote title: ${postNote.title}`); // 'Silence'

        postNote.save(function (err, silence) {
            if (err) return console.error(`MongoDB Error ${err}`);
            console.log("postNote saved to db.");
        });

    });

    app.delete('/', (req, res) => {
        res.send('DELETE Hello World!');
    });

    app.put('/', (req, res) => {
        res.send('PUT Hello World!');
    });

module.exports = app;