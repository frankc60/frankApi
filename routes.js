/** @prettier */
let a = 1;
//routes.js
//const Note = require("./model/mongooseSchema");
const mongoose = require("./model/mongooseActions");

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

//const app = express();

//allow handling of json
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//run for ALL requests
router.use(function(req, res, next) {
    //console.log(`Timestamp: ${new Date(Date.now())}`);
    //morgan is displaying connection info!
    next(); //haven't sent headers to client with render, send, etc, so need to call next() to pass to next handler.
});

router.get("/test", (req, res) => {
    res.send("happy days!");
});

router.get("/", (req, res) => {
    //res.send('GET Hello World!');

    mongoose.find({}, (err, docs) => {
        if (err) throw `MongoDB Error ${err}`;

        let tagline = "Paery";

        res.render("pages/index", {
            tagline: tagline,
            data: docs
        });

        // res.send(JSON.stringify(docs));
    });
});

router.post("/", (req, res) => {
    let note = req.body;
    var data = {
        firstName: req.body.fName,
        lastName: req.body.lName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio
    };

    mongoose.post(note, (err, data) => {
        if (err) throw new Error(err);
        res.send(`POST success: ${data}`);
    });
});

router.delete("/:id", (req, res) => {
    res.send(`DELETE ${req.params.id} - Hello World!`);
});

router.put("/:id", (req, res) => {
    res.send(`PUT ${req.params.id} Hello World!`);
});

module.exports = router;
