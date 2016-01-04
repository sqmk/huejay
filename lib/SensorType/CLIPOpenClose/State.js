'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPOpenClose sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      open: 'open'
    });
  }

  /**
   * Get open
   *
   * @return {bool} True or false
   */
  get open() {
    return this.attributes.get('open');
  }

  /**
   * Set open
   *
   * @param {bool} value True or false
   */
  set open(value) {
    this.attributes.set('open', Boolean(value));
  }
}

module.exports = State;
