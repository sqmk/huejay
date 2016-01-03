'use strict';

/**
 * Ping command
 *
 * Pings bridge
 */
class Ping {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: 'api/config'
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = Ping;
