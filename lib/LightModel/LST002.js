'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LST002',
  manufacturer: 'Philips',
  name:         'Hue LightStrips Plus',
  type:         'Extended Color Light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LST002
 */
class LST002 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LST002;
