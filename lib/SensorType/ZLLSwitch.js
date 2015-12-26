'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on'],
  state:  [],
};

/**
 * Sensor type: ZLLSwitch
 */
class ZLLSwitch extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = ZLLSwitch;
