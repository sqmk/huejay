'use strict';

const ATTRIBUTE_MAP = {
  'name':             'name',
  'apiversion':       'apiVersion',
  'swversion':        'softwareVersion',
  'mac':              'macAddress',
  'bridgeid':         'bridgeId',
  'replacesbridgeid': 'replacesBridgeId',
  'factorynew':       'isFactoryNew',
  'modelid':          'modelId',
};

/**
 * Bridge
 *
 * Bridge object
 */
class Bridge {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.setAttributes(attributes);
    this.resetChanged();
  }

  /**
   * Set attributes
   *
   * @param {Object} attributes Attributes
   */
  setAttributes(attributes) {
    this.attributes = {};

    for (let key in attributes) {
      let attributeKey = key;
      if (key in ATTRIBUTE_MAP) {
        attributeKey = ATTRIBUTE_MAP[key];
      }

      this.attributes[attributeKey] = attributes[key];
    }
  }

  /**
   * Get name
   *
   * @return {string} Name of bridge
   */
  get name() {
    return this.attributes.name;
  }

  /**
   * Set name
   *
   * @param {string} name Name of bridge
   */
  set name(name) {
    this.attributes.name = name;

    this.changed.push('name');
  }

  /**
   * Get API version
   *
   * @return {string} API version
   */
  get apiVersion() {
    return this.attributes.apiVersion;
  }

  /**
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.softwareVersion;
  }

  /**
   * Get bridge id
   *
   * @return {string} Bridge id
   */
  get bridgeId() {
    return this.attributes.bridgeId;
  }

  /**
   * Get replaces bridge id
   *
   * @return {mixed} Bridge id, or null if none
   */
  get replacesBridgeId() {
    return this.attributes.replacesBridgeId;
  }

  /**
   * Is factory new
   *
   * @return {bool} True if factory new, false if not
   */
  get isFactoryNew() {
    return this.attributes.isFactoryNew;
  }

  /**
   * Get model id
   *
   * @return {string} Model id
   */
  get modelId() {
    return this.attributes.modelId;
  }

  /**
   * Mac address
   *
   * @return {string} MAC address
   */
  get macAddress() {
    return this.attributes.macAddress;
  }

  /**
   * Reset changed to nothing
   */
  resetChanged() {
    this.changed = [];
  }
}

module.exports = Bridge;
