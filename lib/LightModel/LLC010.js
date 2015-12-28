'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC010',
  manufacturer: 'Philips',
  name:         'Hue Living Colors Iris',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: true
};

/**
 * Light model: LLC010
 */
class LLC010 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLC010;
