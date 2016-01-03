'use strict';

/**
 * Start light scan command
 *
 * Start a scan for new lights
 */
class StartLightScan {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      method: 'POST',
      url:    `api/${client.username}/lights`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = StartLightScan;
