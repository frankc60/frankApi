/** @prettier */
//mongoose
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/frankApi")
    .then(data => {
        console.log("connected to db okay!");
    })
    .catch(err => {
        console.error(`error with connect! ${err}`);
    });

const db = mongoose.connection;

const noteSchema = mongoose.Schema({
    title: { type: String, required: true },
    note: { type: String, required: false },
    when: { type: Date, required: false },
    setReminder: { type: Boolean, required: false }
});

const Note = db.model("Note", noteSchema);

//is this needed, does it work correctly?? eg. if mongo isn't running
/*noteSchema.pre('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('There was a duplicate key error'));
    } else {
      next(error);
    }
  });
*/

module.exports = Note;
