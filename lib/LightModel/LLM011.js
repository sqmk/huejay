'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLM011',
  manufacturer: 'Philips',
  name:         'Color Temperature Module',
  type:         'Color Temperature Light',
  colorGamut:   '2200K-6500K',
  friendsOfHue: true
};

/**
 * Light model: LLM011
 */
class LLM011 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLM011;
