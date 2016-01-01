'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Scene            = require('../Model/Scene');

// Commands
let GetScenes           = require('../Command/Scene/GetScenes');
let GetSceneById        = require('../Command/Scene/GetSceneById');
let CreateScene         = require('../Command/Scene/CreateScene');
let SaveScene           = require('../Command/Scene/SaveScene');
let SaveSceneLightState = require('../Command/Scene/SaveSceneLightState');
let RecallScene         = require('../Command/Scene/RecallScene');
let DeleteScene         = require('../Command/Scene/DeleteScene');

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
   * Save scene
   *
   * @param {Scene} scene Scene
   *
   * @return {Promise} Promise for chaining
   */
  save(scene) {
    return Promise.all([
      this.client.invokeCommand(new SaveScene(scene)),
      this.client.invokeCommand(new SaveSceneLightState(scene))
    ]).then(() => {
      return scene;
    });
  }

  /**
   * Recall scene
   *
   * @param {mixed} scene Scene object or scene id
   *
   * @return {Promise} Promise for chaining
   */
  recall(scene) {
    return this.client.invokeCommand(new RecallScene(scene));
  }

  /**
   * Delete scene
   *
   * @param {mixed} scene Scene object or scene id
   *
   * @return {Promise} Promise for chaining
   */
  delete(scene) {
    return this.client.invokeCommand(new DeleteScene(scene));
  }
}

module.exports = Scenes;
