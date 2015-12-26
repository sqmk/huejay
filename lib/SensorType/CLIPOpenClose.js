'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'battery', 'url'],
  state:  ['open'],
};

/**
 * Sensor type: CLIPOpenClose
 */
class CLIPOpenClose extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = CLIPOpenClose;
