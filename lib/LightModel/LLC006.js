'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC006',
  manufacturer: 'Philips',
  name:         'Living Colors Gen3 Iris',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: false
};

/**
 * Light model: LLC006
 */
class LLC006 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLC006;
