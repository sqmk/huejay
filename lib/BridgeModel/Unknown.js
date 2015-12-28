'use strict';

let AbstractBridgeModel = require('./AbstractBridgeModel');

const DETAILS = {
  id:           null,
  manufacturer: null,
  name:         null,
};

/**
 * Bridge model: Unknown
 */
class Unknown extends AbstractBridgeModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Unknown;
