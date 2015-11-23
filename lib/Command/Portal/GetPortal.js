'use strict';

let Portal = require('../../Model/Portal');

/**
 * Get portal command
 *
 * Get portal connectivity info
 */
class GetPortal {
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
        return new Portal(result.portalstate);
      });
  }
}

module.exports = GetPortal;
