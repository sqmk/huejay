'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'status',
  'conditions',
  'actions',
];

/**
 * Create rule command
 *
 * Create a rule
 */
class CreateRule {
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
      method: 'POST',
      url:    `api/${client.username}/rules`,
      data:   {}
    };

    Utils.convertConditions(this.rule);
    Utils.convertActions(this.rule);

    let attributes = this.rule.attributes.getAll();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.rule.attributes.resetChanged();

        this.rule.attributes.replace({
          id: result.id
        });

        return this.rule;
      });
  }
}

module.exports = CreateRule;
