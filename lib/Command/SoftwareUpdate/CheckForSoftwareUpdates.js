'use strict';

/**
 * Check for software updates command
 *
 * Updates bridge to check for software update
 */
class CheckForSoftwareUpdates {
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
      url:    `api/${client.username}/config`,
      data:   {
        'swupdate': {
          'checkforupdate': true
        }
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = CheckForSoftwareUpdates;
