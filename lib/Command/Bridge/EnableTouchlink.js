'use strict';

/**
 * Enable Touchlink command
 *
 * Enable Touchlink
 */
class EnableTouchlink {
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
        'touchlink': true
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = EnableTouchlink;
