'use strict';

let Attributes = require('./Attributes');

/**
 * Internet services object
 *
 * Internet services details
 */
class InternetServices {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = new Attributes(attributes);
  }

  /**
   * Internet connected?
   *
   * @return {Boolean} True if connected, false if not
   */
  get internetConnected() {
    return this.attributes.get('internet') == 'connected';
  }

  /**
   * Remote access connected?
   *
   * @return {Boolean} True if connected, false if not
   */
  get remoteAccessConnected() {
    return this.attributes.get('remoteaccess') == 'connected';
  }

  /**
   * Time sync connected?
   *
   * @return {Boolean} True if connected, false if not
   */
  get timeSyncConnected() {
    return this.attributes.get('time') == 'connected';
  }

  /**
   * Time sync connected?
   *
   * @return {Boolean} True if connected, false if not
   */
  get softwareUpdateConnected() {
    return this.attributes.get('swupdate') == 'connected';
  }
}

module.exports = InternetServices;