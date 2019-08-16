'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'lights',
  'recycle',
  'appdata',
  'transitiontime',
];

/**
 * Create scene command
 *
 * Create a scene
 */
class CreateScene {
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
      method: 'POST',
      url:    `${client.username}/scenes`,
      data:   {}
    };

    let attributes = this.scene.attributes.getAll();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.scene.attributes.resetChanged();

        this.scene.attributes.replace({
          id: result.id
        });

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
        url: `${client.username}/scenes/${this.scene.id}`
      })
      .then(result => {
        this.scene.attributes.replace(
          Utils.mapSceneAttributes(result)
        );

        return this.scene;
      });
  }
}

module.exports = CreateScene;
