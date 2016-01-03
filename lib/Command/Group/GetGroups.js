'use strict';

let Utils = require('./Utils');

/**
 * Get groups command
 *
 * Get a list of groups
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
      url: `api/${client.username}/groups`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(groupId => {
          result[groupId].id = groupId;

          return Utils.buildGroup(result[groupId]);
        });
      });
  }
}

module.exports = GetGroups;
