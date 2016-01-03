'use strict';

let Utils = require('./Utils');

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
      url: `api/${client.username}/config`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result.whitelist).map(username => {
          let userResult = result.whitelist[username];
          userResult.username = username;

          return Utils.buildUser(userResult);
        })
      });
  }
}

module.exports = GetUsers;
