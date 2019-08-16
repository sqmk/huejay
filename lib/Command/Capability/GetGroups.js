'use strict';

let Groups = require('../../CapabilityModel/Groups');

/**
 * Get groups command
 */
class GetGroups {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `${client.username}/capabilities`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new Groups(result.groups);
      });
  }
}

module.exports = GetGroups;
