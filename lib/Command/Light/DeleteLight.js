'use strict';

/**
 * Delete light command
 *
 * Delete a light by id
 */
class DeleteLight {
  /**
   * Constructor
   *
   * @param {string} lightId Light Id or Light object
   */
  constructor(lightId) {
    this.lightId = String(lightId);
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
      url:    `api/${client.username}/lights/${this.lightId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteLight;
