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
          let attributes = result[ruleId];
          let conditions = attributes.conditions;
          let actions    = attributes.actions;

          delete attributes.conditions;
          delete attributes.actions;

          attributes.id = Number(ruleId);

          return new Rule(attributes);
        })
      });
  }
}

module.exports = GetRules;
