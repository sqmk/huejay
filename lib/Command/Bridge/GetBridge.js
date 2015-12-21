'use strict';

let Utils = require('./Utils');

/**
 * Get bridge command
 *
 * Get bridge info and configuration
 */
class GetBridge {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      path: client.username !== undefined
        ? `api/${client.username}/config`
        : 'api/config'
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Utils.buildBridge(result);
      });
  }
}

module.exports = GetBridge;
