/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file from-Luf-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

import BN = require('bn.js');
import {fromLuf} from 'web3-utils';

const bigNumber = new BN(3);

// $ExpectType string
fromLuf(bigNumber);
// $ExpectType string
fromLuf('1');
// $ExpectType string
fromLuf(bigNumber, 'ether');
// $ExpectType string
fromLuf('1', 'ether');

// $ExpectError
fromLuf(232);
// $ExpectError
fromLuf(['string']);
// $ExpectError
fromLuf([4]);
// $ExpectError
fromLuf({});
// $ExpectError
fromLuf(true);
// $ExpectError
fromLuf(null);
// $ExpectError
fromLuf(undefined);
// $ExpectError
fromLuf(new BN(3), 'blah');
