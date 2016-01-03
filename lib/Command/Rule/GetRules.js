'use strict';

let Utils = require('./Utils');

/**
 * Get rules command
 *
 * Get a list of rules
 */
class GetRules {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/rules`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(ruleId => {
          result[ruleId].id = ruleId;

          return Utils.buildRule(result[ruleId]);
        })
      });
  }
}

module.exports = GetRules;
