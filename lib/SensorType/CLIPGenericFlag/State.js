'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPGenericFlag sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      flag: 'flag'
    });
  }

  /**
   * Get flag
   *
   * @return {bool} True or false
   */
  get flag() {
    return this.attributes.get('flag');
  }

  /**
   * Set flag
   *
   * @param {bool} value True or false
   */
  set flag(value) {
    this.attributes.set('flag', Boolean(value));
  }
}

module.exports = State;
