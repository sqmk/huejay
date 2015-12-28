'use strict';

const SUPPORTED_MODELS = [
  'LCT001',
  'LCT002',
  'LCT003',
  'LCT007',
  'LLC006',
  'LLC007',
  'LLC010',
  'LLC011',
  'LLC012',
  'LLC013',
  'LLC020',
  'LLM001',
  'LLM010',
  'LLM011',
  'LLM012',
  'LST001',
  'LST002',
  'LWB004',
  'LWB006',
  'LWB007',
  'Unknown',
];

/**
 * Factory for Light Models
 */
class Factory {
  /**
   * Create light model
   *
   * @param {string} modelId Model Id
   *
   * @return {AbstractLightModel} LightModel
   */
  static createLightModel(modelId) {
    if (SUPPORTED_MODELS.indexOf(modelId) === -1) {
      modelId = 'Unknown';
    }

    let LightModel = require(`./${modelId}`);

    return new LightModel;
  }
}

module.exports = Factory;
