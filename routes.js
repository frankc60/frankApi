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
        //res.send('GET Hello World!');
            
        Note.find({}, function (err, docs) {
            if (err) throw(`MongoDB Error ${err}`);

            var tagline = "Notes";
        
            res.render('pages/index', {
                tagline: tagline,
                data: docs
            });

           // res.send(JSON.stringify(docs));
          });
    });

    router.post('/', (req, res) => {
        let note = req.body;
        var data = {
            firstName: req.body.fName,
            lastName: req.body.lName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio
          };


        
        //---------------------------------------------------------
        var postNote = new Note(note);
        console.log(`postNote title: ${postNote.title}`); // 'Silence'

     
        postNote.save(function (err, silence) {
            if (err) console.log(`MongoDB Error ${err}`);
            console.log("postNote saved to db.");
            res.send('POST Hello World! ' + JSON.stringify(note));
        });

    });

    router.delete('/:id', (req, res) => {
        res.send(`DELETE ${req.params.id} - Hello World!`);
    });

    router.put('/:id', (req, res) => {
        res.send(`PUT ${req.params.id} Hello World!`);
    });

module.exports = router;