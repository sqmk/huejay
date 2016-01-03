'use strict';

let Utils = require('./Utils');

const STATE_MAP = {
  'on':             'on',
  'brightness':     'bri',
  'hue':            'hue',
  'saturation':     'sat',
  'xy':             'xy',
  'colorTemp':      'ct',
  'effect':         'effect',
  'transitionTime': 'transitiontime',
};

/**
 * Save scene light state command
 *
 * Saves scene light state
 */
class SaveSceneLightState {
  /**
   * Save scene light state
   *
   * @param {Scene} scene Scene object
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
    let lightStates = this.scene.lightStates.getChanged();
    this.scene.lightStates.resetChanged();

    let promises = [];

    for (let key in lightStates) {
      promises.push(
        this.saveLightState(client, key, lightStates[key])
      );
    }

    return Promise.all(promises)
      .then(() => this.scene);
  }

  /**
   * Save light state
   *
   * @param {Client} client  Client
   * @param {string} lightId Light id
   * @param {Object} state   Light state
   *
   * @return {Promise} Promise for chaining
   */
  saveLightState(client, lightId, state) {
    let options = {
      method: 'PUT',
      url:    `api/${client.username}/scenes/${this.scene.id}/lightstates/${lightId}`,
      data:   {}
    };

    for (let key in state) {
      if (key in STATE_MAP) {
        options.data[STATE_MAP[key]] = state[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = SaveSceneLightState;
