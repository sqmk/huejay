'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC020',
  name:         'Hue Go',
  type:         'Extended Color Light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LLC020
 */
class Llc020 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Llc020;
