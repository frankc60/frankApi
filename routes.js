//routes.js
const Note = require("./model/mongoose");

const express   =   require("express");
const router = express.Router();
const bodyParser  =   require("body-parser");

//const app = express();

//allow handling of json
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

    //run for ALL requests
    router.use(function (req, res, next) {
        //console.log(`Timestamp: ${new Date(Date.now())}`);
        //morgan is displaying connection info!
        next();
    });

    router.get('/test', (req, res) => {
        res.send('happy days!');
    });


    router.get('/', (req, res) => {
        res.send('GET Hello World!');
    });

    router.post('/', (req, res) => {
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

    router.delete('/', (req, res) => {
        res.send('DELETE Hello World!');
    });

    router.put('/', (req, res) => {
        res.send('PUT Hello World!');
    });

module.exports = router;