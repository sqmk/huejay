'use strict';

let Utils = require('./Utils');

/**
 * Get resource link command
 *
 * Get a resource link by id
 */
class GetResourceLink {
  /**
   * Constructor
   *
   * @param {int} resourceLinkId Resource link Id
   */
  constructor(resourceLinkId) {
    this.resourceLinkId = Number(resourceLinkId);
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
      url: `api/${client.username}/resourcelinks/${this.resourceLinkId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.resourceLinkId;

        return Utils.buildResourceLink(result);
      });
  }
}

module.exports = GetResourceLink;
