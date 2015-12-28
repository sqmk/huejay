'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLM001',
  manufacturer: 'Philips',
  name:         'Color Light Module',
  type:         'Extended Color Light',
  colorGamut:   'B',
  friendsOfHue: true
};

/**
 * Light model: LLM001
 */
class LLM001 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLM001;
