'use strict';

let Utils = require('./Utils');

const ALLOWED_STATE = [
  'on',
  'bri',
  'hue',
  'sat',
  'xy',
  'ct',
  'alert',
  'effect',
  'transitiontime',
  'bri_inc',
  'hue_inc',
  'sat_inc',
  'xy_inc',
  'ct_inc',
];

/**
 * Save light state command
 *
 * Saves light state
 */
class SaveLightState {
  /**
   * Constructor
   *
   * @param {Light} light Light
   */
  constructor(light) {
    Utils.validateLight(light);

    this.light = light;
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
      url:    `api/${client.username}/lights/${this.light.id}/state`,
      data:   {},
      multi:  true
    };

    let attributes = this.light.state.getChanged()
    for (let key of ALLOWED_STATE) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(results => {
        this.refreshLightState(results);

        return this.light;
      });
  }

  /**
   * Refresh light state
   *
   * @param {Object} results Results
   */
  refreshLightState(results) {
    this.light.state.resetChanged();

    let newState = {};

    for (let i in results) {
      let key = i.match(/\/state\/(\w+)$/)[1];

      newState[key] = results[i];
    }

    this.light.state.replace(newState);
  }
}

module.exports = SaveLightState;
