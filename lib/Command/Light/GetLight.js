'use strict';

let Light = require('../../Model/Light');

/**
 * Get light command
 *
 * Get a light by id
 */
class GetLight {
  /**
   * Constructor
   *
   * @param {int} lightId Light Id
   */
  constructor(lightId) {
    this.lightId = Number(lightId);
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
      path: `api/${client.username}/lights/${this.lightId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.lightId;

        return new Light(result, result.state);
      });
  }
}

module.exports = GetLight;
