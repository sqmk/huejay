'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * ZLLSwitch sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      buttonEvent: 'buttonevent'
    });
  }

  /**
   * Get button event
   *
   * @return {int} Button event
   */
  get buttonEvent() {
    return this.attributes.get('buttonevent');
  }

  /**
   * Set button event
   *
   * @param {int} event Button event
   */
  set buttonEvent(event) {
    this.attributes.set('buttonevent', parseInt(event, 10));
  }
}

module.exports = State;
