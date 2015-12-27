'use strict';

let Attributes = require('../Model/Attributes');

/**
 * Abstract sensor config
 */
class AbstractSensorConfig {
  /**
   * Constructor
   *
   * @param {Object} config Config
   */
  constructor(config) {
    this.attributes = new Attributes(config);
  }

  /**
   * Get on
   *
   * @return {bool} True if on, false if not
   */
  get on() {
    return this.attributes.get('on');
  }

  /**
   * Set on
   *
   * @param {bool} value True if on, false if not
   */
  set on(value) {
    this.attributes.set('on', Boolean(value));
  }
}

module.exports = AbstractSensorConfig;
