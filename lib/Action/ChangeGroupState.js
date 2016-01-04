'use strict';

let AbstractAction = require('./AbstractAction');
let GroupUtils     = require('../Command/Group/Utils');

const GROUP_STATE_MAP = {
  on:                  'on',
  brightness:          'bri',
  hue:                 'hue',
  saturation:          'sat',
  xy:                  'xy',
  colorTemp:           'ct',
  alert:               'alert',
  effect:              'effect',
  scene:               'scene',
  transitionTime:      'transitiontime',
  incrementBrightness: 'bri_inc',
  incrementHue:        'hue_inc',
  incrementSaturation: 'sat_inc',
  incrementXy:         'xy_inc',
  incrementColorTemp:  'ct_inc',
};

/**
 * Change group state action
 */
class ChangeGroupState extends AbstractAction {
  /**
   * Constructor
   *
   * @param {Group} group    Group
   * @param {array} useState State to use
   */
  constructor(group, useState) {
    super();

    GroupUtils.validateGroup(group);

    this.group    = group;
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
    let address = `/groups/${this.group.id}/action`;
    let body    = {};

    if (this.useState !== undefined) {
      for (let key of this.useState) {
        if (key in GROUP_STATE_MAP) {
          let stateAttribute = GROUP_STATE_MAP[key];
          body[stateAttribute] = this.group.state.get(stateAttribute);
        }
      }
    } else {
      body = this.group.state.getChanged();
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

module.exports = ChangeGroupState;
