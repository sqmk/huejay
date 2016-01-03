'use strict';

let Utils = require('./Utils');

/**
 * Get scenes command
 *
 * Get a list of scenes
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
      url: `api/${client.username}/scenes`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(sceneId => {
          result[sceneId].id = sceneId;

          return Utils.buildScene(result[sceneId]);
        })
      });
  }
}

module.exports = GetScenes;
