'use strict';

/**
 * Delete rule command
 *
 * Delete a rule by id
 */
class DeleteRule {
  /**
   * Constructor
   *
   * @param {int} ruleId Rule Id or Rule object
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
      method: 'DELETE',
      path: `api/${client.username}/rules/${this.ruleId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteRule;
