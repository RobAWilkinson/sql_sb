/*eslint-env node, mocha */

var Fugitive = require('../index.js');
var expect = require('chai').expect;

describe('Fugitive', function() {
  it('Clue 1', function(done) {
    Fugitive.clue1(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({code: "VAT", name: "Holy See (Vatican City State)"});
      done();
    });
  });
  it('Clue 2', function(done) {
    Fugitive.clue2(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({isofficial: true, language: "Italian"});
      done();
    });
  });
  it('Clue 3', function(done) {
    Fugitive.clue3(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ countrycode: "SMR", name: "San Marino", percentage: 100});
      done();
    });
  });
  it('Clue 4', function(done) {
    Fugitive.clue4(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ name: "Serravalle"});
      done();
    });
  });
  it('Clue 5', function(done) {
    Fugitive.clue5(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ countrycode: "BRA", name: "Serra"});
      done();
    });
  });
  it('Clue 6', function(done) {
    Fugitive.clue6(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ name: "Brasília"});
      done();
    });
  });
  it('Clue 7', function(done) {
    Fugitive.clue7(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ name: "Santa Monica"});
      done();
    });
  });
});
