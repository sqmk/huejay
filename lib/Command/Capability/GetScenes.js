'use strict';

let Scenes = require('../../CapabilityModel/Scenes');

/**
 * Get scenes command
 */
class GetScenes {
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
        return new Scenes(result.scenes);
      });
  }
}

module.exports = GetScenes;
