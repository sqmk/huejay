'use strict';

let Utils = require('./Utils');

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
      url: `api/${client.username}/config`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Utils.buildPortal(result.portalstate);
      });
  }
}

module.exports = GetPortal;
