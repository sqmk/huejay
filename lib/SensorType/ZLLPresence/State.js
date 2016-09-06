'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * ZLLPresence sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      presence: 'presence'
    });
  }

  /**
   * Get presence
   *
   * @return {bool} True or false
   */
  get presence() {
    return this.attributes.get('presence');
  }

  /**
   * Set presence
   *
   * @param {bool} value True or false
   */
  set presence(value) {
    this.attributes.set('presence', Boolean(value));
  }
}

module.exports = State;
