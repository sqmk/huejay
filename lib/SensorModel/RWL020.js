'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           'RWL020',
  manufacturer: 'Philips',
  name:         'Hue Wireless Dimmer Switch',
  type:         'ZLLSwitch',
};

/**
 * Sensor model: RWL020
 */
class RWL020 extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = RWL020;
