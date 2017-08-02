'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC014',
  manufacturer: 'Philips',
  name:         'Living Colors Gen3 Bloom',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: false
};

/**
 * Light model: LLC014
 */
class LLC014 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLC014;
