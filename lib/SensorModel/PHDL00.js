'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           'PHDL00',
  manufacturer: 'Philips',
  name:         'Hue Daylight Sensor',
  type:         'Daylight',
};

/**
 * Sensor model: PHDL00
 */
class PHDL00 extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = PHDL00;
