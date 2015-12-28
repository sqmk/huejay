'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LCT003',
  manufacturer: 'Philips',
  name:         'Hue Spot GU10',
  type:         'Extended Color Light',
  colorGamut:   'B',
  friendsOfHue: true
};

/**
 * Light model: LCT003
 */
class LCT003 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LCT003;
