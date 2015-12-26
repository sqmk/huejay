'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on'],
  state:  [],
};

/**
 * Sensor type: ZGPSwitch
 */
class ZGPSwitch extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = ZGPSwitch;
