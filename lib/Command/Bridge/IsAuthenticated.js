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
      // Time zone retrieval as it requires user and not resource intensive
      url: `api/${client.username}/info/timezones`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = IsAuthenticated;
