//var assert = require('assert');
const request = require('request');
const expect = require('chai').expect;
const server = require('../app.js');

describe('server response', function () {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });
});
    describe('http request', function() {
        it('should return 200', function (done) {
            request.get('http://localhost:3000/test', function (err, res, body){
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.equal('happy days!');
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
          expect(res.statusCode).to.equal(404);
         // expect(res.body).to.equal('GET Hello World!');
          done();
        });
      });

    });