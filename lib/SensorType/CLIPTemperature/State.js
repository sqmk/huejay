'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPTemperature sensor: State
 */
class State extends AbstractSensorState {
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
    this.attributes.set('temperature', Number(degrees) * 100);
  }
}

module.exports = State;
