//jshint esversion: 6


const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../string-builder');



describe('StringBuilder', function() {

  var SB;
  beforeEach (function () {
    SB = new StringBuilder('foo');
  });

  it('should be a string', function() {
    StringBuilder.should.be.a.string;
  });

});

