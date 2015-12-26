'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           'ZGPSWITCH',
  manufacturer: 'Philips',
  name:         'Hue Tap',
  type:         'ZGPSwitch',
};

/**
 * Sensor model: ZGPSWITCH
 */
class ZGPSWITCH extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = ZGPSWITCH;
