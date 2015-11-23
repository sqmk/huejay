'use strict';

let Group = require('../../Model/Group');

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
      path: `api/${client.username}/groups/${this.groupId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new Group(this.groupId, result, result.action);
      });
  }
}

module.exports = GetGroup;
