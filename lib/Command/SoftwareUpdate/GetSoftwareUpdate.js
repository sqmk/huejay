'use strict';

let Utils = require('./Utils');

/**
 * Get software update command
 *
 * Get software update info
 */
class GetSoftwareUpdate {
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
        return Utils.buildSoftwareUpdate(result.swupdate);
      });
  }
}

module.exports = GetSoftwareUpdate;
