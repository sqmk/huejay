'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HBL001',
  manufacturer: 'Philips',
  name:         'Hue Beyond Table',
  type:         'Luminaire',
};

/**
 * Group model: HBL001
 */
class HBL001 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HBL001;
