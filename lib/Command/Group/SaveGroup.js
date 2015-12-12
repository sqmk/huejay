'use strict';

let Group = require('../../Model/Group');
let Utils = require('./Utils');

const ATTRIBUTE_MAP = {
  'name':     'name',
  'lightIds': 'lights',
};

/**
 * Save group command
 *
 * Save a group
 */
class SaveGroup {
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
      path:   `api/${client.username}/groups/${this.group.id}`,
      body:   {}
    };

    let attributes = this.group.attributes.getChanged();
    this.group.attributes.resetChanged();

    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        return this.group;
      });
  }
}

module.exports = SaveGroup;
