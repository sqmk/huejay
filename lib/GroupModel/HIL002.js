'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HIL002',
  manufacturer: 'Philips',
  name:         'Hue Impulse Pendant',
  type:         'Luminaire',
};

/**
 * Group model: HIL002
 */
class HIL002 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HIL002;
