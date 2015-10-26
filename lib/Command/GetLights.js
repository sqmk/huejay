'use strict';

let Light = require('../Light');

/**
 * Get lights command
 *
 * Get a list of lights
 */
class GetLights {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      path: `api/${client.username}/lights`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(lightId => {
          return new Light(lightId, result[lightId], result[lightId].state);
        })
      });
  }
}

module.exports = GetLights;
