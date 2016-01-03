'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'zigbeechannel',
  'ipaddress',
  'dhcp',
  'netmask',
  'gateway',
  'proxyport',
  'proxyaddress',
  'timezone',
  'linkbutton',
  'touchlink',
];

/**
 * Save bridge command
 *
 * Saves bridge
 */
class SaveBridge {
  /**
   * Constructor
   *
   * @param {Bridge} bridge Bridge
   */
  constructor(bridge) {
    Utils.validateBridge(bridge);

    this.bridge = bridge;
  }

  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let promises   = [];

    let attributes = this.bridge.attributes.getChanged();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        promises.push(
          this.saveBridgeAttribute(
            client,
            key,
            attributes[key]
          )
        );
      }
    }

    return Promise.all(promises)
      .then(results => {
        this.bridge.attributes.resetChanged();

        return this.bridge;
      });
  }

  /**
   * Save bridge attribute
   *
   * @param {Client} client    Client
   * @param {string} attribute Attribute
   * @param {mixed}  value     Value
   *
   * @return {Promise} Promise for chaining
   */
  saveBridgeAttribute(client, attribute, value) {
    let options = {
      method: 'PUT',
      url:    `api/${client.username}/config`,
      data:   {}
    };

    options.data[attribute] = value;

    return client.getTransport()
      .sendRequest(options);
  }
}

module.exports = SaveBridge;
