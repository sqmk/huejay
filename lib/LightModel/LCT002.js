'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LCT002',
  manufacturer: 'Philips',
  name:         'Hue Spot BR30',
  type:         'Extended Color Light',
  colorGamut:   'B',
  friendsOfHue: true
};

/**
 * Light model: LCT002
 */
class LCT002 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LCT002;
