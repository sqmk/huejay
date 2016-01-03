'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'lights'
];

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
      url:    `api/${client.username}/groups/${this.group.id}`,
      data:   {}
    };

    let attributes = this.group.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
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
