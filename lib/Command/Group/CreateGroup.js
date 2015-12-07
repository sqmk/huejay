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

    for (let key in this.group.attributes.getAll()) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = this.group.attributes.get(key);
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
