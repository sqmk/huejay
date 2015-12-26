'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'battery', 'url'],
  state:  ['flag'],
};

/**
 * Sensor type: CLIPGenericFlag
 */
class CLIPGenericFlag extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = CLIPGenericFlag;
