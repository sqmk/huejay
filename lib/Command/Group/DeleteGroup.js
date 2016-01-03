'use strict';

/**
 * Delete group command
 *
 * Delete a group by id
 */
class DeleteGroup {
  /**
   * Constructor
   *
   * @param {string} groupId Group Id or Group object
   */
  constructor(groupId) {
    this.groupId = String(groupId);
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
      url:    `api/${client.username}/groups/${this.groupId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteGroup;
