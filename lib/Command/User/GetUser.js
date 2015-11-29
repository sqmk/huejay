'use strict';

let User  = require('../../Model/User');
let Utils = require('./Utils');

/**
 * Get user command
 *
 * Get a user by username
 */
class GetUser {
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
      path: `api/${client.username}/config`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        if (!(this.username in result.whitelist)) {
          return undefined;
        }

        let userResult = result.whitelist[this.username];
        userResult.username = this.username;

        return Utils.buildUser(userResult);
      });
  }
}

module.exports = GetUser;
