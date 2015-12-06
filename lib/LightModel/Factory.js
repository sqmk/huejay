'use strict';

const LIGHT_MODEL_MAP = {
  'LCT001': 'Lct001',
  'LCT002': 'Lct002',
  'LCT003': 'Lct003',
  'LCT007': 'Lct007',
  'LLC006': 'Llc006',
  'LLC007': 'Llc007',
  'LLC010': 'Llc010',
  'LLC011': 'Llc011',
  'LLC012': 'Llc012',
  'LLC013': 'Llc013',
  'LLC020': 'Llc020',
  'LLM001': 'Llm001',
  'LLM010': 'Llm010',
  'LLM011': 'Llm011',
  'LLM012': 'Llm012',
  'LST001': 'Lst001',
  'LST002': 'Lst002',
  'LWB004': 'Lwb004',
  'LWB006': 'Lwb006',
  'LWB007': 'Lwb007',
  '*':      'Unknown',
};

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
    if (!(modelId in LIGHT_MODEL_MAP)) {
      modelId = '*';
    }

    let LightModel = require(`./${LIGHT_MODEL_MAP[modelId]}`);

    return new LightModel;
  }
}

module.exports = Factory;
