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
class Zgpswitch extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Zgpswitch;
