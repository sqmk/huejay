'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HBL003',
  manufacturer: 'Philips',
  name:         'Hue Beyond Ceiling',
  type:         'Luminaire',
};

/**
 * Group model: HBL003
 */
class HBL003 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HBL003;
