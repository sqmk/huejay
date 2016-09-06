'use strict';

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
    let GroupModel = null;

    try {
      GroupModel = require(`./${modelId}`);
    } catch (e) {
      GroupModel = require('./Unknown');
    }

    return new GroupModel;
  }
}

module.exports = Factory;
