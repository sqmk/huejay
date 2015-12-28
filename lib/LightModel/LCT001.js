'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LCT001',
  manufacturer: 'Philips',
  name:         'Hue bulb A19',
  type:         'Extended Color Light',
  colorGamut:   'B',
  friendsOfHue: true
};

/**
 * Light model: LCT001
 */
class LCT001 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LCT001;
