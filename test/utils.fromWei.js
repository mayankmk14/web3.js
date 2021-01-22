var assert = require('assert');
var utils = require('../packages/web3-utils');

describe('lib/utils/utils', function () {
    describe('fromLuf', function () {
        it('should return the correct value', function () {

            assert.equal(utils.fromLuf('1000000000000000000', 'luf'),    '1000000000000000000');
            assert.equal(utils.fromLuf('1000000000000000000', 'gluf'),   '1000000000');
            assert.equal(utils.fromLuf('1000000000000000000', 'tiluf'),  '1');

        });

        it('should verify "number" arg is string or BN', function () {
            try {
                utils.fromLuf(100000000000, 'luf')
                assert.fail();
            } catch (error) {
                assert(error.message.includes('Please pass numbers as strings or BN objects'))
            }
        })
        // fromLuf always returns string
        it('should return the correct type', function(){
            var weiString = '100000000000000000';
            var weiBN = utils.toBN(weiString);

            assert(typeof utils.fromLuf(weiString) === 'string');
            assert(typeof utils.fromLuf(weiBN) === 'string');
        })
    });
});
