'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * Daylight sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      daylight: 'daylight'
    });
  }

  /**
   * Get daylight
   *
   * @return {bool} True if daylight, false if not
   */
  get daylight() {
    return this.attributes.get('daylight');
  }
}

module.exports = State;
