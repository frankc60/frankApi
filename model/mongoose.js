//mongoose
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/frankApi').then(
    (data) =>{
        console.log("connected to db okay!");
})
.catch(
    (err) => {
        console.error(`error with connect! ${err}`);
});

const db = mongoose.connection;

const noteSchema = mongoose.Schema({
    title:      {type:String,   required: true},
    note:       {type: String,  required: false},
    when:       {type: Date,    required: false},
    setReminder:{type: Boolean, required: false}
  });
  
const Note = db.model('Note', noteSchema);
  

module.exports = Note;