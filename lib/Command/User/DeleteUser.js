'use strict';

/**
 * Delete user command
 *
 * Delete a user by username
 */
class DeleteUser {
  /**
   * Constructor
   *
   * @param {string} username Username
   */
  constructor(username) {
    this.username = String(username);
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
      url:    `api/${client.username}/config/whitelist/${this.username}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteUser;
