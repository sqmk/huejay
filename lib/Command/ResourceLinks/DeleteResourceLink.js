'use strict';

/**
 * Delete resource link command
 *
 * Delete a resource link by id
 */
class DeleteResourceLink {
  /**
   * Constructor
   *
   * @param {string} resourceLinkId Resource Link Id or ResourceLink object
   */
  constructor(resourceLinkId) {
    this.resourceLinkId = String(resourceLinkId);
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
      method: 'DELETE',
      url:    `api/${client.username}/resourcelinks/${this.resourceLinkId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteResourceLink;
