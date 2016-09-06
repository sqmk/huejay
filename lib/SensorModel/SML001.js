'use strict';

let AbstractSensorModel = require('./AbstractSensorModel');

const DETAILS = {
  id:           'SML001',
  manufacturer: 'Philips',
  name:         'Hue Motion Sensor',
  type:         'ZLLPresence',
};

/**
 * Sensor model: SML001
 */
class SML001 extends AbstractSensorModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = SML001;
