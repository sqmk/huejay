'use strict';

let Group = require('../Group');

const ATTRIBUTE_MAP = {
  'name':   'name',
  'lights': 'lights',
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
    Group.validateGroup(group);

    this.group = group;
    this.changedAttributes = group.getChangedAttributes();
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
      .then(result => {
        this.group.resetChangedAttributes();

        return this.group;
      });
  }
}

module.exports = SaveGroup;
