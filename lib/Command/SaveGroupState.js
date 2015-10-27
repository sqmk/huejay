'use strict';

let Group = require('../Group');

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
  'scene':          'scene',
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
    Group.validateGroup(group);

    this.group        = group;
    this.changedState = group.getChangedState();
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
      body:   {}
    };

    for (let key in this.changedState) {
      if (key in STATE_MAP) {
        options.body[STATE_MAP[key]] = this.changedState[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = SaveGroupState;
