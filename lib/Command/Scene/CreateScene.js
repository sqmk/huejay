'use strict';

let Scene = require('../../Model/Scene');

const ATTRIBUTE_MAP = {
  'name':           'name',
  'lights':         'lights',
  'transitionTime': 'transitiontime',
};

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
    Scene.validateScene(scene);

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
      path:   `api/${client.username}/scenes/${this.scene.id}`,
      body:   {}
    };

    for (let key in this.scene.attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = this.scene.attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => this.scene);
  }
}

module.exports = CreateScene;
