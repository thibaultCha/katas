var mocha  = require('mocha')
var should = require('should')

var misc = require('../lib/misc')

describe('Misc', function () {

    describe('swap', function () {
        it('should swap 2 values', function () {
            misc.swap([1,2]).should.eql([2,1])
            misc.swap([34,193]).should.eql([193,34])
            misc.swap([-12,8]).should.eql([8,-12])
            misc.swap([-6,-3]).should.eql([-3,-6])
        })
    })
})