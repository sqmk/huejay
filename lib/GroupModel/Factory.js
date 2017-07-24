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

    switch(modelId) {
      case 'HBL001':
        GroupModel = require('./HBL001');
        break;
      case 'HBL002':
        GroupModel = require('./HBL002');
        break;
      case 'HBL003':
        GroupModel = require('./HBL003');
        break;
      case 'HEL001':
        GroupModel = require('./HEL001');
        break;
      case 'HEL002':
        GroupModel = require('./HEL002');
        break;
      case 'HIL001':
        GroupModel = require('./HIL001');
        break;
      case 'HIL002':
        GroupModel = require('./HIL002');
        break;
      case 'HML001':
        GroupModel = require('./HML001');
        break;
      case 'HML002':
        GroupModel = require('./HML002');
        break;
      case 'HML003':
        GroupModel = require('./HML003');
        break;
      case 'HML004':
        GroupModel = require('./HML004');
        break;
      case 'HML005':
        GroupModel = require('./HML005');
        break;
      case 'HML006':
        GroupModel = require('./HML006');
        break;
      case 'HML007':
        GroupModel = require('./HML007');
        break;
      default:
        GroupModel = require('./Unknown');
        break;
    }

    return new GroupModel;
  }
}

module.exports = Factory;
