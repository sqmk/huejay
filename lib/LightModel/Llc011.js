'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC011',
  name:         'Hue Living Colors Bloom',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: true
};

/**
 * Light model: LLC011
 */
class Llc011 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Llc011;
