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
      path:   `api/${client.username}/config`,
      body:   {
        'touchlink': true
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = EnableTouchlink;
