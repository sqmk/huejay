'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HEL002',
  manufacturer: 'Philips',
  name:         'Hue Entity Pendant',
  type:         'Luminaire',
};

/**
 * Group model: HEL002
 */
class HEL002 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HEL002;
