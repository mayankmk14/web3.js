var chai = require('chai');
var utils = require('../packages/web3-utils');

var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toLuf', function () {
        it('should return the correct value', function () {

            assert.equal(utils.toLuf('1', 'luf'),    '1');
            assert.equal(utils.toLuf('1', 'gluf'),   '1000000000');
            assert.equal(utils.toLuf('1', 'tiluf'),  '1000000000000000000');
            assert.throws(function () {utils.toLuf(1, 'wei1');}, Error);
        });


        it('should verify "number" arg is string or BN', function () {
            try {
                utils.toLuf(1, 'luf')
                assert.fail();
            } catch (error) {
                assert(error.message.includes('Please pass numbers as strings or BN objects'))
            }
        });

        // toLuf returns string when given string, BN when given BN
        it('should return the correct type', function(){
            var weiString = '1';
            var weiBN = utils.toBN(weiString);

            var bn = utils.toLuf(weiBN);

            assert(utils.isBN(bn));
            assert(typeof utils.toLuf(weiString) === 'string');
        })
    });
});
