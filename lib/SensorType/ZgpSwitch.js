'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on'],
  state:  [],
};

/**
 * Sensor type: ZGPSwitch
 */
class ZgpSwitch extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = ZgpSwitch;
