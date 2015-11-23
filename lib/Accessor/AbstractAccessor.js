'use strict';

/**
 * Abstract accessor
 */
class AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    this.client = client;
  }
}

module.exports = AbstractAccessor;
