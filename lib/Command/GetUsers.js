'use strict';

let User = require('../User');

/**
 * Get users command
 *
 * Get a list of registered users
 */
class GetUsers {
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
        return Object.keys(result.whitelist).map(username => {
          return new User(username, result.whitelist[username]);
        })
      });
  }
}

module.exports = GetUsers;
