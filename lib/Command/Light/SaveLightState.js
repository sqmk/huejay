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
  'alert':          'alert',
  'effect':         'effect',
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
      body:   {}
    };

    for (let key in this.changedState) {
      if (key in STATE_MAP) {
        options.body[STATE_MAP[key]] = this.changedState[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.light.state.resetChanged();

        return this.light;
      });
  }
}

module.exports = SaveLightState;
