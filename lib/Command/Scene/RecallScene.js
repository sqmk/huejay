'use strict';

/**
 * Recall scene command
 *
 * Recall a scene
 */
class RecallScene {
  /**
   * Constructor
   *
   * @param {string} sceneId Scene Id
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
      method: 'PUT',
      path:   `api/${client.username}/groups/0/action`,
      body:   {
        scene: this.sceneId
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }

}

module.exports = RecallScene;
