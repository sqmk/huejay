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
  'scene',
  'transitiontime',
  'bri_inc',
  'hue_inc',
  'sat_inc',
  'xy_inc',
  'ct_inc',
];

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

    this.group = group;
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
      url:    `api/${client.username}/groups/${this.group.id}/action`,
      data:   {},
      multi:  true
    };

    let attributes = this.group.state.getChanged();
    for (let key of ALLOWED_STATE) {
      if (key in attributes) {
        options.data[key] = attributes[key];
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
