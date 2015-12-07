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

    this.group             = group;
    this.changedAttributes = group.attributes.getChanged();
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

    for (let key in this.changedAttributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = this.changedAttributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.group.attributes.resetChanged();

        return this.group;
      });
  }
}

module.exports = SaveGroup;
