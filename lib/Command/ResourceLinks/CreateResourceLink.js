'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'description',
  'classid',
  'recycle',
  'links'
];

/**
 * Create resource link command
 *
 * Create a resource link
 */
class CreateResourceLink {
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
      method: 'POST',
      url:    `api/${client.username}/resourcelinks`,
      data:   {}
    };

    let attributes = this.resourceLink.attributes.getAll();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.resourceLink.attributes.resetChanged();

        this.resourceLink.attributes.replace({
          id: result.id
        });

        return this.resourceLink;
      });
  }
}

module.exports = CreateResourceLink;
