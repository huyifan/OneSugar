/**
 * Created by hugo on 2018/8/29.
 */
let assert = require('assert');
let expect = require('chai').expect;

let XXXModel = require('../model/XXX')

describe('XXXcontroller', function () {

  describe('XXX', function () {
    it('XXX create success', function () {
      // assert.equal([1, 2, 3].indexOf(4), -1);
      XXXModel.create({

      })
      expect([1, 2, 3].indexOf(4)).to.be.equal(-1)
    });
  })

});