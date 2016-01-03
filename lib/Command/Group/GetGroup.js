'use strict';

let Utils = require('./Utils');

/**
 * Get group command
 *
 * Get a group by id
 */
class GetGroup {
  /**
   * Constructor
   *
   * @param {int} groupId Group Id
   */
  constructor(groupId) {
    this.groupId = Number(groupId);
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
      url: `api/${client.username}/groups/${this.groupId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.groupId;

        return Utils.buildGroup(result);
      });
  }
}

module.exports = GetGroup;
