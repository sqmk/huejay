'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML006',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Downlight',
  type:         'Luminaire',
};

/**
 * Group model: HML006
 */
class HML006 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HML006;
