//mongoose
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/frankApi');

const db = mongoose.connection;

const schema1 = mongoose.Schema({
    title:      {type:String, required: true},
    note:       {type: String, required: false},
    when:       {type: Date, required: false},
    setReminder:{type: Boolean, required: false}
  });
  
const Note = db.model('Note', schema1);
  

module.exports = Note;