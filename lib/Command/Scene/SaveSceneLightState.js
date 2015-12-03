'use strict';

let Utils = require('./Utils');

const STATE_MAP = {
  'on':             'on',
  'brightness':     'bri',
  'hue':            'hue',
  'saturation':     'sat',
  'xy':             'xy',
  'colorTemp':      'ct',
  'transitionTime': 'transitiontime',
  'effect':         'effect',
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
   * @param {mixed} scene       Scene object or scene id
   * @param {Light} light       Light
   * @param {Array} filterState Filter state (optional)
   */
  constructor(scene, light, filterState) {
    Utils.validateLight(light);

    this.sceneId = String(scene);
    this.lightId = String(light);

    if (filterState !== undefined) {
      this.state = {};
      for (let key in filterState) {
        this.state[filterState[key]] = light.state.get(filterState[key]);
      }
    } else {
      this.state = light.state.getAll();
    }
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
      path:   `api/${client.username}/scenes/${this.sceneId}/lights/${this.lightId}/state`,
      body:   {}
    };

    for (let key in this.state) {
      if (key in STATE_MAP) {
        options.body[STATE_MAP[key]] = this.state[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = SaveSceneLightState;
