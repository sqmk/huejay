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
    this.attributes = new Attributes(state);
  }

  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return {
      lastUpdated: 'lastupdated'
    };
  }

  /**
   * Get last updated
   *
   * @return {string} Last updated
   */
  get lastUpdated() {
    return this.attributes.get('lastupdated') !== 'none'
      ? this.attributes.get('lastupdated')
      : null;
  }
}

module.exports = AbstractSensorState;
