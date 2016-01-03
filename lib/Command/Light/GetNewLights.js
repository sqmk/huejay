'use strict';

let GetLights = require('./GetLights');

/**
 * Get new lights command
 *
 * Get a list of new lights
 */
class GetNewLights {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/lights/new`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        delete result.lastscan;

        let newLightIds = Object.keys(result);

        return (new GetLights).invoke(client)
          .then(lights => {
            let newLights = [];

            for (let light of lights) {
              if (newLightIds.indexOf(light.id) > -1) {
                newLights.push(light);
              }
            }

            return newLights;
          });
      });
  }
}

module.exports = GetNewLights;
