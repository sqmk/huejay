'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * ZLLTemperature sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      temperature: 'temperature'
    });
  }

  /**
   * Get temperature
   *
   * @return {float} Temperature (Celsius)
   */
  get temperature() {
    return this.attributes.get('temperature') / 100;
  }

  /**
   * Set temperature
   *
   * @param {float} degrees Degrees
   */
  set temperature(degrees) {
    this.attributes.set('temperature', Math.round(Number(degrees) * 100));
  }
}

module.exports = State;
