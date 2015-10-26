'use strict';

let Bridge = require('../Bridge');
let Error  = require('../Error');

const ATTRIBUTE_MAP = {
  'name':          'name',
  'zigbeeChannel': 'zigbeechannel',
  'ipAddress':     'ipaddress',
  'dhcp':          'dhcp',
  'netmask':       'netmask',
  'gateway':       'gateway',
  'proxyPort':     'proxyport',
  'proxyAddress':  'proxyaddress',
  'timeZone':      'timezone',
  'linkButton':    'linkbutton',
  'touchLink':     'touchlink',
};

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
    validateBridge(bridge);

    this.bridge            = bridge;
    this.changedAttributes = bridge.getChangedAttributes();
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
          this.saveBridgeAttribute(
            client,
            ATTRIBUTE_MAP[key],
            this.changedAttributes[key]
          )
        );
      }
    }

    return Promise.all(promises)
      .then(results => {
        this.bridge.resetChangedAttributes();

        return true;
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
      path:   `api/${client.username}/config`,
      body:   {}
    };

    options.body[attribute] = value;

    return client.getTransport()
      .sendRequest(options);
  }
}

/**
 * Validate bridge
 *
 * @param {mixed} bridge Bridge object
 *
 * @return {bool} True if valid
 */
function validateBridge(bridge) {
  if (bridge instanceof Bridge) {
    return true;
  }

  throw Error({
    description: 'Expecting Bridge'
  });
}

module.exports = SaveBridge;
