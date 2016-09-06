'use strict';

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
    let LightModel = null;

    try {
      LightModel = require(`./${modelId}`);
    } catch (e) {
      LightModel = require('./Unknown');
    }

    return new LightModel;
  }
}

module.exports = Factory;
