'use strict';

/**
 * Install software updates command
 *
 * Updates bridge to install software updates
 */
class InstallSoftwareUpdates {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      method: 'PUT',
      url :   `api/${client.username}/config`,
      data:   {
        'swupdate': {
          'updatestate': 3
        }
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = InstallSoftwareUpdates;
