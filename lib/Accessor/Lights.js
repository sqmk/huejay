'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Light            = require('../Model/Light');

// Commands
let StartLightScan = require('../Command/Light/StartLightScan');
let GetNewLights   = require('../Command/Light/GetNewLights');
let GetLights      = require('../Command/Light/GetLights');
let GetLight       = require('../Command/Light/GetLight');
let SaveLight      = require('../Command/Light/SaveLight');
let SaveLightState = require('../Command/Light/SaveLightState');
let DeleteLight    = require('../Command/Light/DeleteLight');

/**
 * Lights accessor
 */
class Lights extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Light = Light;
  }

  /**
   * Start light scan
   *
   * @return {Promise} Promise for chaining
   */
  scan() {
    return this.client.invokeCommand(new StartLightScan);
  }

  /**
   * Get new lights
   *
   * @return {Promise} Promise for chaining
   */
  getNew() {
    return this.client.invokeCommand(new GetNewLights);
  }

  /**
   * Get all lights
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    return this.client.invokeCommand(new GetLights);
  }

  /**
   * Get light by id
   *
   * @param {string} id Light Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(lightId) {
    return this.client.invokeCommand(new GetLight(lightId));
  }

  /**
   * Save light
   *
   * @param {Light} light Light
   *
   * @return {Promise} Promise for chaining
   */
  save(light) {
    return Promise.all([
      this.client.invokeCommand(new SaveLight(light)),
      this.client.invokeCommand(new SaveLightState(light))
    ]).then(() => {
      return light;
    });
  }

  /**
   * Delete
   *
   * @param {mixed} light Light object or light id
   *
   * @return {Promise} Promise for chaining
   */
  delete(light) {
    return this.client.invokeCommand(new DeleteLight(light));
  }
}

module.exports = Lights;
