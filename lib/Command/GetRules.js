'use strict';

let Rule = require('../Rule');

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
      path: `api/${client.username}/rules`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(ruleId => {
          let conditions = result[ruleId].conditions;
          let actions    = result[ruleId].actions;

          delete result[ruleId].conditions;
          delete result[ruleId].actions;

          return new Rule(ruleId, result[ruleId]);
        })
      });
  }
}

module.exports = GetRules;
