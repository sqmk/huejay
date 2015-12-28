'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HBL002',
  manufacturer: 'Philips',
  name:         'Hue Beyond Pendant',
  type:         'Luminaire',
};

/**
 * Group model: HBL002
 */
class HBL002 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HBL002;
