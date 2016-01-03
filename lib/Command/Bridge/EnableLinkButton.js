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
      url:    `api/${client.username}/config`,
      data:   {
        'linkbutton': true
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = EnableLinkButton;
