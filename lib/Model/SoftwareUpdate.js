'use strict';

let Attributes = require('./Attributes');

const UPDATE_STATE_MAP = {
  0: 'NO_UPDATE',
  1: 'DOWNLOADING',
  2: 'READY_TO_INSTALL',
  3: 'INSTALLING',
}

/**
 * Software update object
 *
 * Software update details
 */
class SoftwareUpdate {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = new Attributes(attributes);
  }

  /**
   * Get state
   *
   * @return {string} Update state
   */
  get state() {
    return UPDATE_STATE_MAP[this.attributes.get('updateState')];
  }

  /**
   * Is checking for update
   *
   * @return {Boolean} True if checking for update, false if not
   */
  get checkingEnabled() {
    return Boolean(this.attributes.get('checkingEnabled'));
  }

  /**
   * Is bridge updatable
   *
   * @return {Boolean} Is bridge updatable
   */
  get bridge() {
    return Boolean(this.attributes.get('deviceTypes').bridge);
  }

  /**
   * Get updatable lights
   *
   * @return {array} List of updatable lights
   */
  get lights() {
    return this.attributes.get('deviceTypes').lights;
  }

  /**
   * Get updatable sensors
   *
   * @return {array} List of updatable sensors
   */
  get sensors() {
    return this.attributes.get('deviceTypes').sensors;
  }

  /**
   * Get release url
   *
   * @return {string} Release url
   */
  get releaseUrl() {
    return this.attributes.get('releaseUrl');
  }

  /**
   * Get release notes
   *
   * @return {string} Release notes
   */
  get releaseNotes() {
    return this.attributes.get('releaseNotes');
  }

  /**
   * Is install notification enabled
   *
   * @return {Boolean} True if enabled, false if not
   */
  get installNotificationEnabled() {
    return Boolean(this.attributes.get('installNotification'));
  }
}

module.exports = SoftwareUpdate;
