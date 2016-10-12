'use strict';

let Lights = require('../../CapabilityModel/Lights');

/**
 * Get lights command
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
      url: `api/${client.username}/capabilities`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new Lights(result.lights);
      });
  }
}

module.exports = GetLights;
