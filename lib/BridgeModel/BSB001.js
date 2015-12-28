'use strict';

let AbstractBridgeModel = require('./AbstractBridgeModel');

const DETAILS = {
  id:           'BSB001',
  manufacturer: 'Philips',
  name:         'Hue v1',
};

/**
 * Bridge model: BSB001
 */
class BSB001 extends AbstractBridgeModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = BSB001;
