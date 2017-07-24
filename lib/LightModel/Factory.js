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

    switch(modelId) {
      case 'LCT001':
        LightModel = require('./LCT001');
        break;
      case 'LCT002':
        LightModel = require('./LCT002');
        break;
      case 'LCT003':
        LightModel = require('./LCT003');
        break;
      case 'LCT007':
        LightModel = require('./LCT007');
        break;
      case 'LCT010':
        LightModel = require('./LCT010');
        break;
      case 'LCT011':
        LightModel = require('./LCT011');
        break;
      case 'LCT014':
        LightModel = require('./LCT014');
        break;
      case 'LLC006':
        LightModel = require('./LLC006');
        break;
      case 'LLC007':
        LightModel = require('./LLC007');
        break;
      case 'LLC010':
        LightModel = require('./LLC010');
        break;
      case 'LLC011':
        LightModel = require('./LLC011');
        break;
      case 'LLC012':
        LightModel = require('./LLC012');
        break;
      case 'LLC020':
        LightModel = require('./LLC020');
        break;
      case 'LLM001':
        LightModel = require('./LLM001');
        break;
      case 'LLM010':
        LightModel = require('./LLM010');
        break;
      case 'LLM011':
        LightModel = require('./LLM011');
        break;
      case 'LLM012':
        LightModel = require('./LLM012');
        break;
      case 'LST001':
        LightModel = require('./LST001');
        break;
      case 'LST002':
        LightModel = require('./LST002');
        break;
      case 'LTW001':
        LightModel = require('./LTW001');
        break;
      case 'LTW004':
        LightModel = require('./LTW004');
        break;
      case 'LTW013':
        LightModel = require('./LTW013');
        break;
      case 'LTW013':
        LightModel = require('./LTW014');
        break;
      case 'LWB004':
        LightModel = require('./LWB004');
        break;
      case 'LWB006':
        LightModel = require('./LWB006');
        break;
      case 'LWB007':
        LightModel = require('./LWB007');
        break;
      case 'LWB010':
        LightModel = require('./LWB010');
        break;
      case 'LWB014':
        LightModel = require('./LWB014');
        break;
      default:
        LightModel = require('./Unknown');
        break;
    }

    return new LightModel;
  }
}

module.exports = Factory;
