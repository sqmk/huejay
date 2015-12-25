'use strict';

const SENSOR_TYPE_MAP = {
  'CLIPGenericFlag':   'ClipGenericFlag',
  'CLIPGenericStatus': 'ClipGenericStatus',
  'CLIPHumidity':      'ClipHumidity',
  'CLIPOpenClose':     'ClipOpenClose',
  'CLIPPresence':      'ClipPresence',
  'CLIPSwitch':        'ClipSwitch',
  'CLIPTemperature':   'ClipTemperature',
  'Daylight':          'Daylight',
  'ZGPSwitch':         'ZgpSwitch',
  'ZLLSwitch':         'ZllSwitch',
  '*':                 'Unknown',
};

/**
 * Factory for Sensor Types
 */
class Factory {
  /**
   * Create sensor type
   *
   * @param {string} type Type
   *
   * @return {AbstractSensorType} Sensor type
   */
  static createSensorType(type) {
    if (!(type in SENSOR_TYPE_MAP)) {
      type = '*';
    }

    let SensorType = require(`./${SENSOR_TYPE_MAP[type]}`);

    return new SensorType;
  }
}

module.exports = Factory;
