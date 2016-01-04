'use strict';

let AbstractAction = require('./AbstractAction');
let LightUtils     = require('../Command/Light/Utils');

const LIGHT_STATE_MAP = {
  on:                  'on',
  brightness:          'bri',
  hue:                 'hue',
  saturation:          'sat',
  xy:                  'xy',
  colorTemp:           'ct',
  alert:               'alert',
  effect:              'effect',
  transitionTime:      'transitiontime',
  incrementBrightness: 'bri_inc',
  incrementHue:        'hue_inc',
  incrementSaturation: 'sat_inc',
  incrementXy:         'xy_inc',
  incrementColorTemp:  'ct_inc',
};

/**
 * Change light state action
 */
class ChangeLightState extends AbstractAction {
  /**
   * Constructor
   *
   * @param {Light} light    Light
   * @param {array} useState State to use
   */
  constructor(light, useState) {
    super();

    LightUtils.validateLight(light);

    this.light    = light;
    this.useState = useState;
  }

  /**
   * Export action
   *
   * @param {client} client Client
   *
   * @return {Object} Action object
   */
  exportAction(client, withUsername) {
    let address = `/lights/${this.light.id}/state`;
    let body    = {};

    if (this.useState !== undefined) {
      for (let key of this.useState) {
        if (key in LIGHT_STATE_MAP) {
          let stateAttribute = LIGHT_STATE_MAP[key];
          body[stateAttribute] = this.light.state.get(stateAttribute);
        }
      }
    } else {
      body = this.light.state.getChanged();
    }

    if (!!withUsername) {
      address = `/api/${client.username}${address}`;
    }

    return {
      method: 'PUT',
      address,
      body,
    }
  }
}

module.exports = ChangeLightState;
