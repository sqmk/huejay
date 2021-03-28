'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           'RWL022',
  manufacturer: 'Philips',
  name:         'Hue Wireless Dimmer Switch',
  type:         'ZLLSwitch',
};

/**
 * Sensor model: RWL022
 */
class RWL022 extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = RWL021;
