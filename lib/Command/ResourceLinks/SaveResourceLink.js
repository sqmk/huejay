'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'description',
  'links'
];

/**
 * Save resource link command
 *
 * Save a resource link
 */
class SaveResourceLink {
  /**
   * Constructor
   *
   * @param {ResourceLink} resourceLink Resource Link
   */
  constructor(resourceLink) {
    Utils.validateResourceLink(resourceLink);

    this.resourceLink = resourceLink;
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
      url:    `api/${client.username}/resourcelinks/${this.resourceLink.id}`,
      data:   {}
    };

    let attributes = this.resourceLink.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.resourceLink.attributes.resetChanged();

        return this.resourceLink;
      });
  }
}

module.exports = SaveResourceLink;
