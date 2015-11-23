'use strict';

let Scene = require('../../Model/Scene');

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
      path: `api/${client.username}/scenes`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(sceneId => {
          return new Scene(sceneId, result[sceneId]);
        })
      });
  }
}

module.exports = GetScenes;
