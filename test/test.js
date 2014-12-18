var request = require('supertest');
var app = require('../app2.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});


//        console.log("Express server listening on port " + app.get('port'));

