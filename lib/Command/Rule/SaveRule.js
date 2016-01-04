'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'status',
  'conditions',
  'actions',
];

/**
 * Save rule command
 *
 * Save a rule
 */
class SaveRule {
  /**
   * Constructor
   *
   * @param {Rule} rule Rule
   */
  constructor(rule) {
    Utils.validateRule(rule);

    this.rule = rule;
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
      method: 'PUT',
      url:    `api/${client.username}/rules/${this.rule.id}`,
      data:   {}
    };

    Utils.convertConditions(this.rule);
    Utils.convertActions(this.rule);

    let attributes = this.rule.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.rule.attributes.resetChanged();

        return this.rule;
      });
  }
}

module.exports = SaveRule;
