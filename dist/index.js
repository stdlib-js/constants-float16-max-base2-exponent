/** @license Apache-2.0 */

'use strict';

/**
* The maximum biased base 2 exponent for a half-precision floating-point number.
*
* @module @stdlib/constants-float16-max-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT16_MAX_BASE2_EXPONENT = require( '@stdlib/constants-float16-max-base2-exponent' );
* // returns 15
*/


// MAIN //

/**
* The maximum biased base 2 exponent for a half-precision floating-point number.
*
* ```text
* 11110 => 30 - BIAS = 15
* ```
*
* where `BIAS = 15`.
*
* @constant
* @type {integer32}
* @default 15
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT16_MAX_BASE2_EXPONENT = 15|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_MAX_BASE2_EXPONENT;
