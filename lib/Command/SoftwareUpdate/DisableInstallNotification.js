'use strict';

/**
 * Disable install notification command
 *
 * Updates bridge to disable install notification
 */
class DisableInstallNotification {
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
          'notify': false
        }
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DisableInstallNotification;
