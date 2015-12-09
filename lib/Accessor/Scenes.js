'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Scene            = require('../Model/Scene');

// Commands
let GetScenes           = require('../Command/Scene/GetScenes');
let GetSceneById        = require('../Command/Scene/GetSceneById');
let CreateScene         = require('../Command/Scene/CreateScene');
let SaveSceneLightState = require('../Command/Scene/SaveSceneLightState');

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
    return this.client.invokeCommand(new GetScenes);
  }


  /**
   * Get by id
   *
   * @param {string} sceneId Scene Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(sceneId) {
    return this.client.invokeCommand(new GetSceneById(sceneId));
  }

  /**
   * Create scene
   *
   * @param {Scene} scene Scene
   *
   * @return {Promise} Promise for chaining
   */
  create(scene) {
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
    return this.client.invokeCommand(
      new SaveSceneLightState(scene, light, filterState)
    );
  }
}

module.exports = Scenes;
