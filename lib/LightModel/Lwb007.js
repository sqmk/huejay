'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LWB007',
  manufacturer: 'Philips',
  name:         'Hue A19 Lux',
  type:         'Dimmable Light',
  colorGamut:   null,
  friendsOfHue: true
};

/**
 * Light model: LWB007
 */
class Lwb007 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Lwb007;
