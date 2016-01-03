'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name'
];

/**
 * Save light command
 *
 * Saves light
 */
class SaveLight {
  /**
   * Constructor
   *
   * @param {Light} light Light
   */
  constructor(light) {
    Utils.validateLight(light);

    this.light = light;
  }

  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let promises = [];

    let attributes = this.light.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        promises.push(
          this.saveLightAttribute(
            client,
            key,
            attributes[key]
          )
        );
      }
    }

    return Promise.all(promises)
      .then(results => {
        this.light.attributes.resetChanged();

        return this.light;
      });
  }

  /**
   * Save light attribute
   *
   * @param {Client} client    Client
   * @param {string} attribute Attribute
   * @param {mixed}  value     Value
   *
   * @return {Promise} Promise for chaining
   */
  saveLightAttribute(client, attribute, value) {
    let options = {
      method: 'PUT',
      url:    `api/${client.username}/lights/${this.light.id}`,
      data:   {}
    };

    options.data[attribute] = value;

    return client.getTransport()
      .sendRequest(options);
  }
}

module.exports = SaveLight;
