'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LWV001',
  manufacturer: 'Philips',
  name:         'Hue filament bulb',
  type:         'Dimmable light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LWV001
 */
class LWV001 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LWV001;
