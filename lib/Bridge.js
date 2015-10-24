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
  isFactoryNew() {
    return Boolean(this.attributes.isFactoryNew);
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
   * Set zigbee channel
   *
   * @param {int} channel Channel
   */
  set zigbeeChannel(channel) {
    this.attributes.zigbeeChannel = parseInt(channel);

    this.changed.push('zigbeeChannel');
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
   * IP Address
   *
   * @return {string} IP Address
   */
  get ipAddress() {
    return this.attributes.ipAddress;
  }

  /**
   * Is dhcp enabled
   *
   * @return {bool} True if enabled, false if not
   */
  isDhcpEnabled() {
    return Boolean(this.attributes.dhcp);
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
   * Get gateway
   *
   * @return {string} Gateway
   */
  get gateway() {
    return this.attributes.gateway;
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
   * Get proxy port
   */
  get proxyPort() {
    if (this.attributes.proxyPort === 0) {
      return undefined;
    }

    return this.attributes.proxyPort;
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
  isPortalServicesEnabled() {
    return Boolean(this.attributes.portalServices);
  }

  /**
   * Is portal connected
   *
   * @return {bool} True if connected, false if not
   */
  isPortalConnected() {
    return this.attributes.portalConnection === 'connected';
  }

  /**
   * Is link button enabled
   *
   * @return {bool} True if enabled, false if not
   */
  isLinkButtonEnabled() {
    return Boolean(this.attributes.linkButton);
  }

  /**
   * Enable link button
   *
   * @param {bool} value True to enable, false to disable
   */
  enableLinkButton(value) {
    this.attributes.linkButton = Boolean(value);

    this.changed.push('linkButton');
  }

  /**
   * Is touch link enabled
   *
   * @return {bool} True if enabled, false if not
   */
  isTouchLinkEnabled() {
    return Boolean(this.attributes.touchLink);
  }

  /**
   * Enable touch link
   *
   * @param {bool} value True to enable, false to disable
   */
  enableTouchLink(value) {
    this.attributes.touchLink = Boolean(value);

    this.changed.push('touchLink');
  }

  /**
   * Reset changed to nothing
   */
  resetChanged() {
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
