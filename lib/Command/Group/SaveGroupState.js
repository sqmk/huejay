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
  'scene':               'scene',
  'transitionTime':      'transitiontime',
  'incrementBrightness': 'bri_inc',
  'incrementHue':        'hue_inc',
  'incrementSaturation': 'sat_inc',
  'incrementXy':         'xy_inc',
  'incrementColorTemp':  'ct_inc',
};

/**
 * Save group state command
 *
 * Saves group state
 */
class SaveGroupState {
  /**
   * Constructor
   *
   * @param {Group} group Group
   */
  constructor(group) {
    Utils.validateGroup(group);

    this.group        = group;
    this.changedState = group.state.getChanged();
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
      path:   `api/${client.username}/groups/${this.group.id}/action`,
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
        this.refreshGroupState(results);

        return this.group;
      });
  }

  /**
   * Refresh group state
   *
   * @param {Object} results Results
   */
  refreshGroupState(results) {
    this.group.state.resetChanged();

    let newState = {};

    for (let i in results) {
      let key = i.match(/\/action\/(\w+)$/)[1];

      newState[key] = results[i];
    }

    this.group.state.replace(Utils.mapGroupState(newState));
  }
}

module.exports = SaveGroupState;
