'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           null,
  manufacturer: null,
  name:         null,
  type:         null,
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
