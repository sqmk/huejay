'use strict';

const SUPPORTED_MODELS = [
  'HBL001',
  'HBL002',
  'HBL003',
  'HEL001',
  'HEL002',
  'HIL001',
  'HIL002',
  'HML001',
  'HML002',
  'HML003',
  'HML007',
  'Unknown',
];

/**
 * Factory for Group Models
 */
class Factory {
  /**
   * Create group model
   *
   * @param {string} modelId Model Id
   *
   * @return {AbstractGroupModel} GroupModel
   */
  static createGroupModel(modelId) {
    if (SUPPORTED_MODELS.indexOf(modelId) === -1) {
      modelId = 'Unknown';
    }

    let GroupModel = require(`./${modelId}`);

    return new GroupModel;
  }
}

module.exports = Factory;
