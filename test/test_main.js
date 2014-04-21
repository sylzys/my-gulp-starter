var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var number = require('./../src/js/main').number;
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1);
    })
  })
})

describe('Main', function(){
  describe('#number()', function(){
    it('should return -1 when the number is less than 0', function(){
      expect(number(-10)).to.equal(-1);
    })
  })
})