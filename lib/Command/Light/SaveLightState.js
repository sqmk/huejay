'use strict';

let Utils = require('./Utils');

const STATE_MAP = {
  'on':                  'on',
  'brightness':          'bri',
  'hue':                 'hue',
  'saturation':          'sat',
  'xy':                  'xy',
  'colorTemp':           'ct',
  'alert':               'alert',
  'effect':              'effect',
  'transitionTime':      'transitiontime',
  'incrementBrightness': 'bri_inc',
  'incrementHue':        'hue_inc',
  'incrementSaturation': 'sat_inc',
  'incrementXy':         'xy_inc',
  'incrementColorTemp':  'ct_inc',
};

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

    this.light        = light;
    this.changedState = light.state.getChanged();
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
      path:   `api/${client.username}/lights/${this.light.id}/state`,
      body:   {},
      multi:  true
    };

    for (let key in this.changedState) {
      if (key in STATE_MAP) {
        options.body[STATE_MAP[key]] = this.changedState[key];
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

    this.light.state.replace(Utils.mapLightState(newState));
  }
}

module.exports = SaveLightState;
