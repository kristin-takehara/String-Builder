//jshint esversion: 6


const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const StringBuilder = require('../string-builder');



describe('StringBuilder', function() {

  var SB;
  beforeEach (function () {
    SB = new StringBuilder("foo");
  });

  it('should be a string', function() {
    // StringBuilder.should.be.a.string;
    expect(SB.string).to.be.a('string');
  });

  it('should be a function', function(){
    //StringBuilder.isFunction;
    assert.isFunction(StringBuilder);
  });

  it('should be reversed', function(){
    expect(SB.string).to.equal("oof");
  });


});

