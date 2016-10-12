'use strict';

let Rules = require('../../CapabilityModel/Rules');

/**
 * Get rules command
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
      url: `api/${client.username}/capabilities`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new Rules(result.rules);
      });
  }
}

module.exports = GetRules;
