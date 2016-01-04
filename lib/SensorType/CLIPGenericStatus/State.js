'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPGenericStatus sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      status: 'status'
    });
  }

  /**
   * Get status
   *
   * @return {int} Number
   */
  get status() {
    return this.attributes.get('status');
  }

  /**
   * Set status
   *
   * @param {int} value Number
   */
  set status(value) {
    this.attributes.set('status', parseInt(value, 10));
  }
}

module.exports = State;
