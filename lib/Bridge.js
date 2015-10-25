'use strict';

const ATTRIBUTE_MAP = {
  'bridgeid':         'id',
  'name':             'name',
  'modelid':          'modelId',
  'factorynew':       'factoryNew',
  'replacesbridgeid': 'replacesBridgeId',
  'zigbeechannel':    'zigbeeChannel',
  'apiversion':       'apiVersion',
  'swversion':        'softwareVersion',
  'mac':              'macAddress',
  'ipaddress':        'ipAddress',
  'dhcp':             'dhcp',
  'netmask':          'netmask',
  'gateway':          'gateway',
  'proxyaddress':     'proxyAddress',
  'proxyport':        'proxyPort',
  'UTC':              'utcTime',
  'localtime':        'localTime',
  'timezone':         'timeZone',
  'portalservices':   'portalServices',
  'portalconnection': 'portalConnection',
  'linkbutton':       'linkButton',
  'touchlink':        'touchLink',
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
    this.resetChangedValues();
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
        this.attributes[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }
  }

  /**
   * Get bridge id
   *
   * @return {string} Bridge id
   */
  get id() {
    return this.attributes.id;
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
   * Get model id
   *
   * @return {string} Model id
   */
  get modelId() {
    return this.attributes.modelId;
  }

  /**
   * Is factory new
   *
   * @return {bool} True if factory new, false if not
   */
  get factoryNew() {
    return Boolean(this.attributes.factoryNew);
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
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.softwareVersion;
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
   * Get zigbee channel
   *
   * @return {string} Zigbee channel
   */
  get zigbeeChannel() {
    return this.attributes.zigbeeChannel;
  }

  /**
   * Set Zigbee channel
   *
   * @param {int} channel Channel
   */
  set zigbeeChannel(channel) {
    this.attributes.zigbeeChannel = Number(channel);

    this.changed.push('zigbeeChannel');
  }

  /**
   * Get MAC address
   *
   * @return {string} MAC address
   */
  get macAddress() {
    return this.attributes.macAddress;
  }

  /**
   * Get IP Address
   *
   * @return {string} IP Address
   */
  get ipAddress() {
    return this.attributes.ipAddress;
  }

  /**
   * Set IP Address
   *
   * @param {string} ipAddress IP Address
   */
  set ipAddress(ipAddress) {
    this.attributes.ipAddress = String(ipAddress);

    this.changed.push('ipAddress');
  }

  /**
   * Is DHCP enabled
   *
   * @return {bool} True if enabled, false if not
   */
  get dhcpEnabled() {
    return Boolean(this.attributes.dhcp);
  }

  /**
   * Enable DHCP
   *
   * @param {bool} True to enable, false to disable
   */
  set dhcpEnabled(value) {
    this.attributes.dhcp = Boolean(value);

    this.changed.push('dhcp');
  }

  /**
   * Get netmask
   *
   * @return {string} Netmask
   */
  get netmask() {
    return this.attributes.netmask;
  }

  /**
   * Set netmask
   *
   * @param {string} mask Network mask
   */
  set netmask(mask) {
    this.attributes.netmask = String(mask);

    this.changed.push('netmask');
  }


  /**
   * Get gateway
   *
   * @return {string} Gateway
   */
  get gateway() {
    return this.attributes.gateway;
  }

  /**
   * Set gateway
   *
   * @param {string} address Address
   */
  set gateway(address) {
    this.attributes.gateway = String(address);

    this.changed.push('gateway');
  }

  /**
   * Get proxy address
   *
   * @return {mixed} Proxy address
   */
  get proxyAddress() {
    if (this.attributes.proxyAddress === 'none') {
      return undefined;
    }

    return this.attributes.proxyAddress;
  }

  /**
   * Set proxy address
   *
   * @param {string} address Address
   */
  set proxyAddress(address) {
    this.attributes.proxyAddress = String(address);

    this.changed.push('proxyAddress');
  }

  /**
   * Get proxy port
   */
  get proxyPort() {
    if (this.attributes.proxyPort === 0) {
      return undefined;
    }

    return this.attributes.proxyPort;
  }

  /**
   * Set proxy port
   *
   * @param {int} port Port
   */
  set proxyPort(port) {
    this.attributes.proxyPort = Number(port);

    this.changed.push('proxyPort');
  }

  /**
   * Get utc time
   *
   * @return {string} UTC time
   */
  get utcTime() {
    return this.attributes.utcTime;
  }

  /**
   * Get time zone
   *
   * @return {string} Time zone
   */
  get timeZone() {
    if (this.attributes.timezone === 'none') {
      return undefined;
    }

    return this.attributes.timeZone;
  }

  /**
   * Set time zone
   *
   * @param {string} timeZone Time zone
   */
  set timeZone(timeZone) {
    this.attributes.timeZone = String(timeZone);

    this.changed.push('timeZone');
  }

  /**
   * Get local time
   *
   * @return {string} Local time
   */
  get localTime() {
    if (this.attributes.localTime === 'none') {
      return undefined;
    }

    return this.attributes.localTime;
  }

  /**
   * Is portal services enabled
   *
   * @return {bool} True if enabled, false if not
   */
  get portalServicesEnabled() {
    return Boolean(this.attributes.portalServices);
  }

  /**
   * Is portal connected
   *
   * @return {bool} True if connected, false if not
   */
  get portalConnected() {
    return this.attributes.portalConnection === 'connected';
  }

  /**
   * Get link button state
   *
   * @return {bool} True if enabled, faise if not
   */
  get linkButtonEnabled() {
    return Boolean(this.attributes.linkButton);
  }

  /**
   * Enable link button
   *
   * @param {bool} value True to enable, false to disable
   */
  set linkButtonEnabled(value) {
    this.attributes.linkButton = Boolean(value);

    this.changed.push('linkButton');
  }

  /**
   * Get touch link state
   *
   * @return {bool} True if enabled, faise if not
   */
  get touchLinkEnabled() {
    return Boolean(this.attributes.touchLink);
  }

  /**
   * Enable touch link
   *
   * @param {bool} value True to enable, false to disable
   */
  set touchLinkEnabled(value) {
    this.attributes.touchLink = Boolean(value);

    this.changed.push('touchLink');
  }

  /**
   * Get changed
   *
   * @return {array} List of changed values (with original keys)
   */
  getChangedValues() {
    let changedValues = {};

    for (let key of this.changed) {
      changedValues[key] = this.attributes[key];
    }

    return changedValues;
  }

  /**
   * Reset changed values
   */
  resetChangedValues() {
    this.changed = [];
  }

  /**
   * To string
   *
   * @return {string} Bridge Id
   */
  toString() {
    return this.id;
  }
}

module.exports = Bridge;
