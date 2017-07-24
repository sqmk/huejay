'use strict';

const SUPPORTED_BRIDGES = [
  'BSB001',
  'BSB002',
  'Unknown',
];

/**
 * Factory for Bridge Models
 */
class Factory {
  /**
   * Create bridge model
   *
   * @param {string} modelId Model Id
   *
   * @return {AbstractBridgeModel} Bridge model
   */
  static createBridgeModel(modelId) {
    if (SUPPORTED_BRIDGES.indexOf(modelId) === -1) {
      modelId = 'Unknown';
    }

    let BridgeModel;

    switch(modelId) {
      case 'BSB001':
        BridgeModel = require('./BSB001');
        break;
      case 'BSB002':
        BridgeModel = require('./BSB002');
        break;
      default:
      case 'Unknown':
        BridgeModel = require('./Unknown');
    }

    return new BridgeModel;
  }
}

module.exports = Factory;
