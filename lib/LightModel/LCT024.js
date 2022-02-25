'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LCT024',
  manufacturer: 'Philips',
  name:         'Hue ambiance play light bar',
  type:         'Extended Color Light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LCT024
 */
class LCT024 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LCT024;
