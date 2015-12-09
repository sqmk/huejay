'use strict';

let Group = require('../../Model/Group');
let Utils = require('./Utils');

const ATTRIBUTE_MAP = {
  'name':     'name',
  'lightIds': 'lights',
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
      path:   `api/${client.username}/groups`,
      body:   {}
    };

    let attributes = this.group.attributes.getAll();
    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.group.attributes.set('id', result.id);
        this.group.attributes.resetChanged();

        return this.group;
      });
  }
}

module.exports = CreateGroup;
