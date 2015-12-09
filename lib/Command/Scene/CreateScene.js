'use strict';

let Scene = require('../../Model/Scene');
let Utils = require('./Utils');

const ATTRIBUTE_MAP = {
  'name':           'name',
  'lightIds':       'lights',
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
      path:   `api/${client.username}/scenes/${this.scene.id}`,
      body:   {}
    };

    let attributes = this.scene.attributes.getAll();
    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => this.scene);
  }
}

module.exports = CreateScene;
