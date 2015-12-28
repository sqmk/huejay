'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC012',
  manufacturer: 'Philips',
  name:         'Hue Living Colors Bloom',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: true
};

/**
 * Light model: LLC012
 */
class LLC012 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLC012;
