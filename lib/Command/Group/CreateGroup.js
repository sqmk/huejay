'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'type',
  'class',
  'lights',
];

/**
 * Create group command
 *
 * Create a group
 */
class CreateGroup {
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
      method: 'POST',
      url:    `api/${client.username}/groups`,
      data:   {}
    };

    let attributes = this.group.attributes.getAll();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.group.attributes.resetChanged();

        this.group.attributes.replace({
          id: result.id
        });

        return this.group;
      });
  }
}

module.exports = CreateGroup;
