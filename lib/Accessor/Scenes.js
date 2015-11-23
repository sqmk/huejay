'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Scene            = require('../Model/Scene');

/**
 * Scenes accessor
 */
class Scenes extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Scene = Scene;
  }

  /**
   * Get scenes
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    let GetScenes = require('../Command/Scene/GetScenes');

    return this.client.invokeCommand(new GetScenes);
  }

  /**
   * Create scene
   *
   * @param {Scene} scene Scene
   *
   * @return {Promise} Promise for chaining
   */
  create(scene) {
    let CreateScene = require('../Command/Scene/CreateScene');

    return this.client.invokeCommand(new CreateScene(scene));
  }

  /**
   * Save scene light state
   *
   * @param {mixed} scene       Scene object or scene id
   * @param {Light} light       Light
   * @param {Array} filterState Filter state (optional)
   *
   * @return {Promise} Promise for chaining
   */
  saveLightState(scene, light, filterState) {
    let SaveSceneLightState = require('../Command/Scene/SaveSceneLightState');

    return this.client.invokeCommand(
      new SaveSceneLightState(scene, light, filterState)
    );
  }
}

module.exports = Scenes;
