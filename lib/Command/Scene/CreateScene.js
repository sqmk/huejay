'use strict';

let Scene = require('../../Model/Scene');
let Utils = require('./Utils');

const ATTRIBUTE_MAP = {
  'name':           'name',
  'lightIds':       'lights',
  'recycle':        'recycle',
  'appData':        'appdata',
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
      method: 'POST',
      path:   `api/${client.username}/scenes`,
      body:   {}
    };

    let attributes = this.scene.attributes.getAll();
    this.scene.attributes.resetChanged();

    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
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
        path: `api/${client.username}/scenes/${this.scene.id}`
      })
      .then(result => {
        this.scene.attributes.replace(Utils.mapSceneAttributes(result));

        return this.scene;
      });
  }
}

module.exports = CreateScene;
