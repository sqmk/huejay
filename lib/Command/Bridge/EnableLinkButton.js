'use strict';

/**
 * Enable Link Button command
 *
 * Enable link button
 */
class EnableLinkButton {
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
        'linkbutton': true
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = EnableLinkButton;
