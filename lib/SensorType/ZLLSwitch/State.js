'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * ZLLSwitch sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get button event
   *
   * @return {int} Button event
   */
  get buttonEvent() {
    return this.sensorState.get('buttonevent');
  }

  /**
   * Set button event
   *
   * @param {int} event Button event
   */
  set buttonEvent(event) {
    this.sensorState.set('buttonevent', parseInt(event));
  }
}

module.exports = State;
