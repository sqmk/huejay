'use strict';

let Utils = require('./Utils');

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
      url: `api/${client.username}/lights`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(lightId => {
          result[lightId].id = lightId;

          return Utils.buildLight(result[lightId]);
        });
      });
  }
}

module.exports = GetLights;
