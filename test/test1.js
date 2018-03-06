//var assert = require('assert');
const request = require('request');
const chai = require('chai');
require('../app.js');
const Note  = require("../model/mongoose");


describe('server response', function () {
  before(function () {
  //  server.listen(3000);
  });

  after(function () {
//    server.close();
  });
});
describe('http request', function() {
      it('should return 200', function (done) {
        request('http://localhost:3000/test', function (err, res, body){
            chai.expect(res.statusCode).to.equal(200);
              chai.expect(res.body).to.equal('happy days!');
              done();
          });
      });

      it('should return 404', function (done) {
        request.delete('http://localhost:3000', function (err, res, body){
          chai.expect(res.statusCode).to.equal(404);
            //chai.expect(res.body).to.equal('happy days!');
            done();
        });
      });



      it('should return 404', function (done) {
          var options = {
            url: 'http://localhost:3000/bananaPancake',
            headers: {
              'Content-Type': 'text/plain'
            }
          };
          request.get(options, function (err, res, body) {
            chai.expect(res.statusCode).to.equal(404);
          // chai.expect(res.body).to.equal('GET Hello World!');
            done();
          });
        });
});

describe('DB Connection', function(done) {
  before(function (done) {
    mongoose.connect('mongodb://localhost/frankApi');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to frankApi database!');
      done();
    });
  });
});

describe('Create DB Entry', function(done) {
  //Save object with 'name' value of 'Mike"
  it('save document to mongo db with mongoose', function(done) {
    var travisTest = new Note({ title: 'travisTest' });
    
    travisTest.save(done);
  });
});

describe('Find Document in Database', function(done) {
  //Save object with 'name' value of 'Mike"
  it('find document in mongo db with mongoose', function(done) {
    //var travisTest = new Note({ title: 'travisTest', "ssfsa":34 });
    
    Note.find({ 'title': "travisTest" }, function (err, docs) {
      // docs is an array
      if(err) {
        console.log(err);
      } else {
        console.log(docs);
      }
      done();
    });

    //travisTest.save(done);
  });
});

