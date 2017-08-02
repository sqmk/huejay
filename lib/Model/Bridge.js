'use strict';

let Attributes         = require('./Attributes');
let BridgeModelFactory = require('../BridgeModel/Factory');

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
    this.attributes = new Attributes(attributes);
  }

  /**
   * Get bridge id
   *
   * @return {string} Bridge id
   */
  get id() {
    return this.attributes.get('bridgeid');
  }

  /**
   * Get name
   *
   * @return {string} Name of bridge
   */
  get name() {
    return this.attributes.get('name');
  }

  /**
   * Set name
   *
   * @param {string} name Name of bridge
   */
  set name(name) {
    this.attributes.set('name', name);
  }

  /**
   * Get model id
   *
   * @return {string} Model id
   */
  get modelId() {
    return this.attributes.get('modelid');
  }

  /**
   * Get model
   *
   * Lazy loads model for the bridge
   *
   * @return {BridgeModel} Bridge model
   */
  get model() {
    if (this.bridgeModel === undefined) {
      this.bridgeModel = BridgeModelFactory.createBridgeModel(this.modelId);
    }

    return this.bridgeModel;
  }

  /**
   * Is factory new
   *
   * @return {bool} True if factory new, false if not
   */
  get factoryNew() {
    return Boolean(this.attributes.get('factorynew'));
  }

  /**
   * Get replaces bridge id
   *
   * @return {mixed} Bridge id, or null if none
   */
  get replacesBridgeId() {
    return this.attributes.get('replacesbridgeid');
  }

  /**
   * Get data store version
   *
   * @return {mixed} Data store version, or null if none
   */
  get dataStoreVersion() {
    return this.attributes.get('datastoreversion');
  }

  /**
   * Get starter kit id
   *
   * @return {mixed} Starter kit id, or empty string if none
   */
  get starterKitId() {
    return this.attributes.get('starterkitid');
  }

  /**
   * Get software version
   *
   * @return {string} Software version
   */
  get softwareVersion() {
    return this.attributes.get('swversion');
  }

  /**
   * Get API version
   *
   * @return {string} API version
   */
  get apiVersion() {
    return this.attributes.get('apiversion');
  }

  /**
   * Get zigbee channel
   *
   * @return {string} Zigbee channel
   */
  get zigbeeChannel() {
    return this.attributes.get('zigbeechannel');
  }

  /**
   * Set Zigbee channel
   *
   * @param {int} channel Channel
   */
  set zigbeeChannel(channel) {
    this.attributes.set('zigbeechannel', Number(channel));
  }

  /**
   * Get MAC address
   *
   * @return {string} MAC address
   */
  get macAddress() {
    return this.attributes.get('mac');
  }

  /**
   * Get IP Address
   *
   * @return {string} IP Address
   */
  get ipAddress() {
    return this.attributes.get('ipaddress');
  }

  /**
   * Set IP Address
   *
   * @param {string} ipAddress IP Address
   */
  set ipAddress(ipAddress) {
    this.attributes.set('ipaddress', String(ipAddress));
  }

  /**
   * Is DHCP enabled
   *
   * @return {bool} True if enabled, false if not
   */
  get dhcpEnabled() {
    return Boolean(this.attributes.get('dhcp'));
  }

  /**
   * Enable DHCP
   *
   * @param {bool} True to enable, false to disable
   */
  set dhcpEnabled(value) {
    this.attributes.set('dhcp', Boolean(value));
  }

  /**
   * Get netmask
   *
   * @return {string} Netmask
   */
  get netmask() {
    return this.attributes.get('netmask');
  }

  /**
   * Set netmask
   *
   * @param {string} mask Network mask
   */
  set netmask(mask) {
    this.attributes.set('netmask', String(mask));
  }


  /**
   * Get gateway
   *
   * @return {string} Gateway
   */
  get gateway() {
    return this.attributes.get('gateway');
  }

  /**
   * Set gateway
   *
   * @param {string} address Address
   */
  set gateway(address) {
    this.attributes.set('gateway', String(address));
  }

  /**
   * Get proxy address
   *
   * @return {mixed} Proxy address
   */
  get proxyAddress() {
    let proxyAddress = this.attributes.get('proxyaddress');

    return proxyAddress === 'none'
      ? undefined
      : proxyAddress;
  }

  /**
   * Set proxy address
   *
   * @param {string} address Address
   */
  set proxyAddress(address) {
    this.attributes.set('proxyaddress', String(address));
  }

  /**
   * Get proxy port
   *
   * @return {mixed} Proxy port if set, undefined if not
   */
  get proxyPort() {
    let proxyPort = this.attributes.get('proxyport');

    return proxyPort === 0
      ? undefined
      : proxyPort;
  }

  /**
   * Set proxy port
   *
   * @param {int} port Port
   */
  set proxyPort(port) {
    this.attributes.set('proxyport', Number(port));
  }

  /**
   * Get utc time
   *
   * @return {string} UTC time
   */
  get utcTime() {
    return this.attributes.get('UTC');
  }

  /**
   * Get time zone
   *
   * @return {string} Time zone
   */
  get timeZone() {
    let timeZone = this.attributes.get('timezone');

    return timeZone === 'none'
      ? undefined
      : timeZone;
  }

  /**
   * Set time zone
   *
   * @param {string} timeZone Time zone
   */
  set timeZone(timeZone) {
    this.attributes.set('timezone', String(timeZone));
  }

  /**
   * Get local time
   *
   * @return {string} Local time
   */
  get localTime() {
    let localTime = this.attributes.get('localtime');

    return localTime === 'none'
      ? undefined
      : localTime;
  }

  /**
   * Is portal services enabled
   *
   * @return {bool} True if enabled, false if not
   */
  get portalServicesEnabled() {
    return Boolean(this.attributes.get('portalservices'));
  }

  /**
   * Is portal connected
   *
   * @return {bool} True if connected, false if not
   */
  get portalConnected() {
    return this.attributes.get('portalconnection') === 'connected';
  }

  /**
   * Get link button state
   *
   * @return {bool} True if enabled, faise if not
   */
  get linkButtonEnabled() {
    return Boolean(this.attributes.get('linkbutton'));
  }

  /**
   * Enable link button
   *
   * @param {bool} value True to enable, false to disable
   */
  set linkButtonEnabled(value) {
    this.attributes.set('linkbutton', Boolean(value));
  }

  /**
   * Get Touchlink state
   *
   * @return {bool} True if enabled, faise if not
   */
  get touchlinkEnabled() {
    return Boolean(this.attributes.get('touchlink'));
  }

  /**
   * Enable Touchlink
   *
   * @param {bool} value True to enable, false to disable
   */
  set touchlinkEnabled(value) {
    this.attributes.set('touchlink', Boolean(value));
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
