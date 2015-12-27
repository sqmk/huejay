'use strict';

let Attributes = require('../Model/Attributes');

/**
 * Abstract sensor state
 */
class AbstractSensorState {
  /**
   * Constructor
   *
   * @param {Object} state State
   */
  constructor(state) {
    this.sensorState = new Attributes(state);
  }

  /**
   * Get last updated
   *
   * @return {string} Last updated
   */
  get lastUpdated() {
    return this.sensorState.get('lastupdated');
  }
}

module.exports = AbstractSensorState;
