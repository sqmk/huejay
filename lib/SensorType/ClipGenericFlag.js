'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'battery', 'url'],
  state:  ['flag'],
};

/**
 * Sensor type: CLIPGenericFlag
 */
class ClipGenericFlag extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = ClipGenericFlag;
