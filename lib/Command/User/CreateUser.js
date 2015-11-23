'use strict';

const DEFAULT_DEVICE_TYPE = 'huejay';

/**
 * Create user command
 *
 * Create a user
 */
class CreateUser {
  /**
   * Constructor
   *
   * @param {string} deviceType Device type (optional)
   */
  constructor(deviceType) {
    this.deviceType = deviceType !== undefined
      ? deviceType
      : DEFAULT_DEVICE_TYPE;
  }

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
      path:   'api',
      body: {
        'devicetype': this.deviceType
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return result.username;
      });
  }
}

module.exports = CreateUser;
