'use strict';

let Utils = require('./Utils');

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
      url: `api/${client.username}/lights/${this.lightId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.lightId;

        return Utils.buildLight(result);
      });
  }
}

module.exports = GetLight;
