'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML004',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Wall',
  type:         'Luminaire',
};

/**
 * Group model: HML004
 */
class HML004 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HML004;
