'use strict';

let Utils = require('./Utils');

const ATTRIBUTE_MAP = {
  'name': 'name',
};

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

    this.light             = light;
    this.changedAttributes = light.attributes.getChanged();
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
    for (let key in this.changedAttributes) {
      if (key in ATTRIBUTE_MAP) {
        promises.push(
          this.saveLightAttribute(
            client,
            ATTRIBUTE_MAP[key],
            this.changedAttributes[key]
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
      path:   `api/${client.username}/lights/${this.light.id}`,
      body:   {}
    };

    options.body[attribute] = value;

    return client.getTransport()
      .sendRequest(options);
  }
}

module.exports = SaveLight;
