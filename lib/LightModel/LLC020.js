'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC020',
  manufacturer: 'Philips',
  name:         'Hue Go',
  type:         'Extended Color Light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LLC020
 */
class LLC020 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLC020;
