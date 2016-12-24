'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LWB010',
  manufacturer: 'Philips',
  name:         'Hue A19 Lux',
  type:         'Dimmable Light',
  colorGamut:   null,
  friendsOfHue: true
};

/**
 * Light model: LWB010
 */
class LWB010 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LWB010;
