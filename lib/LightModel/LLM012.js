'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLM012',
  manufacturer: 'Philips',
  name:         'Color Temperature Module',
  type:         'Color Temperature Light',
  colorGamut:   '2200K-6500K',
  friendsOfHue: true
};

/**
 * Light model: LLM012
 */
class LLM012 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLM012;
