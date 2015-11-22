'use strict';

let Rule = require('../Rule');

/**
 * Get rule command
 *
 * Get a rule by id
 */
class GetRule {
  /**
   * Constructor
   *
   * @param {int} ruleId Rule Id
   */
  constructor(ruleId) {
    this.ruleId = Number(ruleId);
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
      path: `api/${client.username}/rules/${this.ruleId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        let conditions = result.conditions;
        let actions    = result.actions;

        delete result.conditions;
        delete result.actions;

        result.id = this.ruleId;

        return new Rule(result);
      });
  }
}

module.exports = GetRule;
