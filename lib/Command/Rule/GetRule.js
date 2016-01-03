'use strict';

let Utils = require('./Utils');

/**
 * Get rule command
 *
 * Get a rule by id
 */
class GetRule {
  /**
   * Constructor
   *
   * @param {string} ruleId Rule Id
   */
  constructor(ruleId) {
    this.ruleId = String(ruleId);
  }

  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/rules/${this.ruleId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.ruleId;

        return Utils.buildRule(result);
      });
  }
}

module.exports = GetRule;
