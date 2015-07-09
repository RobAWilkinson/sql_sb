var pg = require('pg');
var conString = "postgres://" + process.env.USER + ":@localhost/world";
var Query = require('./query.js');

var Fugitive = {
  query1: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query1, function(err, result) {
        client.end();
        cb(result.rows[0]);
      });
    });
  }
};
function done(input) {
  console.log(input);
}
Fugitive.query1(done);
