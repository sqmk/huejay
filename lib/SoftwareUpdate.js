'use strict';

const ATTRIBUTE_MAP = {
  'updatestate':    'updateState',
  'checkforupdate': 'checkingEnabled',
  'devicetypes':    'deviceTypes',
  'url':            'releaseUrl',
  'text':           'releaseNotes',
  'notify':         'installNotification',
};

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
    this.setAttributes(attributes);
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
   * Get state
   *
   * @return {string} Update state
   */
  get state() {
    return UPDATE_STATE_MAP[this.attributes.updateState];
  }

  /**
   * Is checking for update
   *
   * @return {Boolean} True if checking for update, false if not
   */
  get checkingEnabled() {
    return Boolean(this.attributes.checkingEnabled);
  }

  /**
   * Is bridge updatable
   *
   * @return {Boolean} Is bridge updatable
   */
  get bridge() {
    return Boolean(this.attributes.deviceTypes.bridge);
  }

  /**
   * Get updatable lights
   *
   * @return {array} List of updatable lights
   */
  get lights() {
    return this.attributes.deviceTypes.lights;
  }

  /**
   * Get updatable sensors
   *
   * @return {array} List of updatable sensors
   */
  get sensors() {
    return this.attributes.deviceTypes.sensors;
  }

  /**
   * Get release url
   *
   * @return {string} Release url
   */
  get releaseUrl() {
    return this.attributes.releaseUrl;
  }

  /**
   * Get release notes
   *
   * @return {string} Release notes
   */
  get releaseNotes() {
    return this.attributes.releaseNotes;
  }

  /**
   * Is install notification enabled
   *
   * @return {Boolean} True if enabled, false if not
   */
  get installNotificationEnabled() {
    return Boolean(this.attributes.installNotification);
  }
}

module.exports = SoftwareUpdate;
