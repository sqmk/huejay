'use strict';

/**
 * Is authenticated command
 *
 * Determines if user is authenticated to bridge
 */
class IsAuthenticated {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      path: `api/${client.username}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = IsAuthenticated;
