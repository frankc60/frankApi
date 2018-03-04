//mongoose
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/frankApi');

const db = mongoose.connection;

const schema1 = mongoose.Schema({
    title: String,
    note: String,
    when: Date,
    setReminder:  Boolean
  });
  
const Note = db.model('Note', schema1);
  

module.exports = Note;