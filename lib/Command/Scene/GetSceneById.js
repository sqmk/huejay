'use strict';

let Utils = require('./Utils');

/**
 * Get scene by id command
 *
 * Get a list of scenes
 */
class GetSceneById {
  /**
   * Constructor
   *
   * @param {int} sceneId Scene Id
   */
  constructor(sceneId) {
    this.sceneId = String(sceneId);
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
      url: `api/${client.username}/scenes/${this.sceneId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.sceneId;

        return Utils.buildScene(result);
      });
  }
}

module.exports = GetSceneById;
