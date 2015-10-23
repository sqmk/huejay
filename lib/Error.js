'use strict';

/**
 * Exception
 *
 * Extends error for customized huejay errors
 */
class HuejayError extends Error {
  /**
   * Constructor
   *
   * @param {Object}  error      Error details
   * @param {string}  fileName   Filename
   * @param {integer} lineNumber Line number
   */
  constructor(error, fileName, lineNumber) {
    super(
      `Philips Hue: ${error.type}, ${error.description}`,
      fileName,
      lineNumber
    );

    this.type = error.type;
  }
}

module.exports = HuejayError;
