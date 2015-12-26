'use strict';

let AbstractSensorType = require('./AbstractSensorType');

const DETAILS = {
  config: ['on', 'battery', 'url'],
  state:  ['presence'],
};

/**
 * Sensor type: CLIPPresence
 */
class CLIPPresence extends AbstractSensorType {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = CLIPPresence;
