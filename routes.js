/** @prettier */
let a = 1;
//routes.js
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

router.get("/test", (req, res, next) => {
    res.send("happy days!");
});

router.get("/", (req, res, next) => {
    mongoose.find({}, (err, docs) => {
        if (err) throw `MongoDB Error ${err}`;

        let tagline = "NoteTaking";

        res.render("pages/index", {
            tagline: tagline,
            data: docs
        });
    });
});

router.post("/", (req, res, next) => {
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

router.delete("/:id", (req, res, next) => {
    let id = req.params.id;
    res.send(`DELETE ${id} - Hello World!`);
});

router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    res.send(`PUT ${id} Hello World!`);
});

router.get("/title/:title", (req, res, next) => {
    //let id = req.params.title;
    mongoose.find({ title: new RegExp(req.params.title, "i") }, (err, docs) => {
        if (err) throw `MongoDB Error ${err}`;

        let tagline = "NoteTaking";

        res.render("pages/index", {
            tagline: tagline,
            data: docs
        });
    });
});

module.exports = router;
