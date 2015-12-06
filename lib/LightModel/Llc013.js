'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC013',
  name:         'Disney Living Colors',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: true
};

/**
 * Light model: LLC013
 */
class Llc013 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Llc013;
