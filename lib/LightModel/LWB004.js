'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LWB004',
  manufacturer: 'Philips',
  name:         'Hue A19 Lux',
  type:         'Dimmable Light',
  colorGamut:   null,
  friendsOfHue: true
};

/**
 * Light model: LWB004
 */
class LWB004 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LWB004;
