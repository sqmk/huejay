'use strict';

let AbstractAction = require('./AbstractAction');
let GroupUtils     = require('../Command/Group/Utils');

const GROUP_ACTION_MAP = {
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
 * Change group action action
 */
class ChangeGroupAction extends AbstractAction {
  /**
   * Constructor
   *
   * @param {Group} group     Group
   * @param {array} useAction Action to use
   */
  constructor(group, useAction) {
    super();

    GroupUtils.validateGroup(group);

    this.group     = group;
    this.useAction = useAction;
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

    if (this.useAction !== undefined) {
      for (let key of this.useAction) {
        if (key in GROUP_ACTION_MAP) {
          let actionAttribute = GROUP_ACTION_MAP[key];
          body[actionAttribute] = this.group.action.get(actionAttribute);
        }
      }
    } else {
      body = this.group.action.getChanged();
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

module.exports = ChangeGroupAction;
