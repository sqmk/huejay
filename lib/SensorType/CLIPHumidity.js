'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'battery', 'url'],
  state:  ['humidity'],
};

/**
 * Sensor type: CLIPHumidity
 */
class CLIPHumidity extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = CLIPHumidity;
