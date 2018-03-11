let NoteSchema = require("./mongooseSchema");

let mongooseAction = {
    verson: 1.0,
    tagline: "Party",
    post(note, callback)  {
          var postNote = new NoteSchema(note);
          //console.log(`postNote title: ${postNote.title}`); // 'Silence'

          postNote.save(function (err, obj) {
              //if (err) console.log(`MongoDB Error ${err}`);
              console.log("postNote saved to db.");
              callback(err, JSON.stringify(obj));
              //return "complete moongoose post";
          });
    },
    test:   "test string",
    find(note,callback) {
        NoteSchema.find(note, function (err, docs) {
            callback(err, docs);
        });
    },
    test2:   "test2 string"
};

module.exports = mongooseAction;