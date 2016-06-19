'use strict';

let Utils = require('./Utils');

const ALLOWED_ACTION = [
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
 * Save group action command
 *
 * Saves group action
 */
class SaveGroupAction {
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

    let attributes = this.group.action.getChanged();
    for (let key of ALLOWED_ACTION) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(results => {
        this.refreshGroupAction(results);

        return this.group;
      });
  }

  /**
   * Refresh group action
   *
   * @param {Object} results Results
   */
  refreshGroupAction(results) {
    this.group.action.resetChanged();

    let newAction = {};

    for (let i in results) {
      let key = i.match(/\/action\/(\w+)$/)[1];

      newAction[key] = results[i];
    }

    this.group.action.replace(Utils.mapGroupAction(newAction));
  }
}

module.exports = SaveGroupAction;
