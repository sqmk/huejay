'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML007',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Downlight',
  type:         'Luminaire',
};

/**
 * Group model: HML007
 */
class HML007 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HML007;
