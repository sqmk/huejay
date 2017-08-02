'use strict';

let Utils = require('./Utils');

/**
 * Get internet services command
 *
 * Get internet services connectivity info
 */
class GetInternetServices {
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
        return Utils.buildInternetServices(result.internetservices);
      });
  }
}

module.exports = GetInternetServices;
