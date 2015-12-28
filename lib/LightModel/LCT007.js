'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LCT007',
  manufacturer: 'Philips',
  name:         'Hue bulb A19',
  type:         'Extended Color Light',
  colorGamut:   'B',
  friendsOfHue: true
};

/**
 * Light model: LCT007
 */
class LCT007 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LCT007;
