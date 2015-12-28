'use strict';

let AbstractBridgeModel = require('./AbstractBridgeModel');

const DETAILS = {
  id:           'BSB002',
  manufacturer: 'Philips',
  name:         'Hue v2',
};

/**
 * Bridge model: BSB002
 */
class BSB002 extends AbstractBridgeModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = BSB002;
