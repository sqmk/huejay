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
      path:   `api/${client.username}/config`,
      body:   {
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
