'use strict';

/**
 * Factory for Sensor Types
 */
class Factory {
  /**
   * Create sensor config
   *
   * @param {string} type   Type
   * @param {Object} config Config
   *
   * @return {Object} Sensor config
   */
  static createSensorConfig(type, config) {
    let SensorConfig = this.mapSensorType(type, 'Config');

    return new SensorConfig(config);
  }

  /**
   * Create sensor state
   *
   * @param {string} type  Type
   * @param {Object} state State
   *
   * @return {Object} Sensor state
   */
  static createSensorState(type, state) {
    let SensorState = this.mapSensorType(type, 'State');

    return new SensorState(state);
  }

  /**
   * Map sensor type
   *
   * @param {string} type Type
   *
   * @return {string} Type
   */
  static mapSensorType(type, resource) {
    let SensorResource = null;
    switch(type) {
      case 'CLIPGenericFlag':
        SensorResource = resource === 'Config' ?
          require('./CLIPGenericFlag/Config') :
          require('./CLIPGenericFlag/State');
        break;
      case 'CLIPGenericStatus':
        SensorResource = resource === 'Config' ?
          require('./CLIPGenericStatus/Config') :
          require('./CLIPGenericStatus/State');
        break;
      case 'CLIPHumidity':
        SensorResource = resource === 'Config' ?
          require('./CLIPHumidity/Config') :
          require('./CLIPHumidity/State');
        break;
      case 'CLIPLightLevel':
        SensorResource = resource === 'Config' ?
          require('./CLIPLightLevel/Config') :
          require('./CLIPLightLevel/State');
        break;
      case 'CLIPOpenClose':
        SensorResource = resource === 'Config' ?
          require('./CLIPOpenClose/Config') :
          require('./CLIPOpenClose/State');
        break;
      case 'CLIPPresence':
        SensorResource = resource === 'Config' ?
          require('./CLIPPresence/Config') :
          require('./CLIPPresence/State');
        break;
      case 'CLIPSwitch':
        SensorResource = resource === 'Config' ?
          require('./CLIPSwitch/Config') :
          require('./CLIPSwitch/State');
        break;
      case 'CLIPTemperature':
        SensorResource = resource === 'Config' ?
          require('./CLIPTemperature/Config') :
          require('./CLIPTemperature/State');
        break;
      case 'Daylight':
        SensorResource = resource === 'Config' ?
          require('./Daylight/Config') :
          require('./Daylight/State');
        break;
      case 'Unknown':
        SensorResource = resource === 'Config' ?
          require('./Unknown/Config') :
          require('./Unknown/State');
        break;
      case 'ZGPSwitch':
        SensorResource = resource === 'Config' ?
          require('./ZGPSwitch/Config') :
          require('./ZGPSwitch/State');
        break;
      case 'ZLLLightLevel':
        SensorResource = resource === 'Config' ?
          require('./ZLLLightLevel/Config') :
          require('./ZLLLightLevel/State');
        break;
      case 'ZLLPresence':
        SensorResource = resource === 'Config' ?
          require('./ZLLPresence/Config') :
          require('./ZLLPresence/State');
        break;
      case 'ZLLSwitch':
        SensorResource = resource === 'Config' ?
          require('./ZLLSwitch/Config') :
          require('./ZLLSwitch/State');
        break;
      case 'ZLLTemperature':
        SensorResource = resource === 'Config' ?
          require('./ZLLTemperature/Config') :
          require('./ZLLTemperature/State');
        break;
    }

    return SensorResource;
  }
}

module.exports = Factory;
