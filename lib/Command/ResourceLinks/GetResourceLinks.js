'use strict';

let Utils = require('./Utils');

/**
 * Get resource links command
 *
 * Get a list of resource links
 */
class GetResourceLinks {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/resourcelinks`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(resourceLinkId => {
          result[resourceLinkId].id = resourceLinkId;

          return Utils.buildResourceLink(result[resourceLinkId]);
        });
      });
  }
}

module.exports = GetResourceLinks;
