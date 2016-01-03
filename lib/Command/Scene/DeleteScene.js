'use strict';

/**
 * Delete scene command
 *
 * Delete a scene by id
 */
class DeleteScene {
  /**
   * Constructor
   *
   * @param {string} sceneId Scene Id or Scene object
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
      method: 'DELETE',
      url:    `api/${client.username}/scenes/${this.sceneId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteScene;
