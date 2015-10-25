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
    let errorDescription = error.type !== undefined
      ? `Philips Hue: ${error.type}, ${error.description}`
      : `Huejay: ${error.description}`;

    super(errorDescription, fileName, lineNumber);

    this.type = error.type;
  }
}

module.exports = HuejayError;
