'use strict';

let SoftwareUpdate = require('../SoftwareUpdate');

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
      path: `api/${client.username}/config`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new SoftwareUpdate(result.swupdate);
      });
  }
}

module.exports = GetSoftwareUpdate;
