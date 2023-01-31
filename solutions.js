"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1.
const isBoolean = testCase => typeof testCase === 'boolean';

console.log(isBoolean('blue'),
isBoolean([9,0,'red']),
isBoolean(true),
isBoolean(false),
isBoolean('true'),
isBoolean(1));

// 2.