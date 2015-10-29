'use strict';

let Group = require('../Group');

const ATTRIBUTE_MAP = {
  'name':   'name',
  'lights': 'lights',
};

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
    Group.validateGroup(group);

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
      path:   `api/${client.username}/groups`,
      body:   {}
    };

    for (let key in this.group.attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = this.group.attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.group.attributes.id = result.id;

        this.group.resetChangedAttributes();

        return this.group;
      });
  }
}

module.exports = CreateGroup;
