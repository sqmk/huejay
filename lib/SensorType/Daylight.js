'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'long', 'lat', 'sunriseoffset', 'sunsetoffset'],
  state:  [],
};

/**
 * Sensor type: Daylight
 */
class Daylight extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Daylight;
