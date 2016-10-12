'use strict';

let ResourceLinks = require('../../CapabilityModel/ResourceLinks');

/**
 * Get resource links command
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
      url: `api/${client.username}/capabilities`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new ResourceLinks(result.resourcelinks);
      });
  }
}

module.exports = GetResourceLinks;
