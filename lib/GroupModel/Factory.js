'use strict';

const GROUP_MODEL_MAP = {
  'HBL001': 'Hbl001',
  'HBL002': 'Hbl002',
  'HBL003': 'Hbl003',
  'HEL001': 'Hel001',
  'HEL002': 'Hel002',
  'HIL001': 'Hil001',
  'HIL002': 'Hil002',
  'HML001': 'Hml001',
  'HML002': 'Hml002',
  'HML003': 'Hml003',
  'HML007': 'Hml007',
  '*':      'Unknown',
};

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
    if (!(modelId in GROUP_MODEL_MAP)) {
      modelId = '*';
    }

    let GroupModel = require(`./${GROUP_MODEL_MAP[modelId]}`);

    return new GroupModel;
  }
}

module.exports = Factory;
