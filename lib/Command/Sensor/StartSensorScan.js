'use strict';

/**
 * Start sensor scan command
 *
 * Start a scan for new sensors
 */
class StartSensorScan {
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
      url:    `api/${client.username}/sensors`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = StartSensorScan;
