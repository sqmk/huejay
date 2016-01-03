'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'lights',
  'recycle',
  'appdata',
  'storelightstate',
  'transitiontime',
];

/**
 * Save scene command
 *
 * Save a scene
 */
class SaveScene {
  /**
   * Constructor
   *
   * @param {Scene} scene Scene
   */
  constructor(scene) {
    Utils.validateScene(scene);

    this.scene = scene;
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
      url:    `api/${client.username}/scenes/${this.scene.id}`,
      data:   {}
    };

    let attributes = this.scene.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.scene.attributes.resetChanged();

        return this.reloadSceneAttributes(client);
      });
  }

  /**
   * Reload scene attributes
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  reloadSceneAttributes(client) {
    return client.getTransport()
      .sendRequest({
        url: `api/${client.username}/scenes/${this.scene.id}`
      })
      .then(result => {
        this.scene.attributes.replace(
          Utils.mapSceneAttributes(result)
        );

        return this.scene;
      });
  }
}

module.exports = SaveScene;
