'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'battery', 'url'],
  state:  ['temperature'],
};

/**
 * Sensor type: CLIPTemperature
 */
class CLIPTemperature extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = CLIPTemperature;
