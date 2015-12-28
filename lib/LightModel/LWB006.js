'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LWB006',
  manufacturer: 'Philips',
  name:         'Hue A19 Lux',
  type:         'Dimmable Light',
  colorGamut:   null,
  friendsOfHue: true
};

/**
 * Light model: LWB006
 */
class LWB006 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LWB006;
