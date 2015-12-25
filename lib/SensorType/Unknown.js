'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: [],
  state:  [],
};

/**
 * Sensor model: Unknown
 */
class Unknown extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Unknown;
