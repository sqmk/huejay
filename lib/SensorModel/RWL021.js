'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           'RWL021',
  manufacturer: 'Philips',
  name:         'Hue Wireless Dimmer Switch',
  type:         'ZLLSwitch',
};

/**
 * Sensor model: RWL021
 */
class Rwl021 extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Rwl021;
