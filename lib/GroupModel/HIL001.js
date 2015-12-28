'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HIL001',
  manufacturer: 'Philips',
  name:         'Hue Impulse Table',
  type:         'Luminaire',
};

/**
 * Group model: HIL001
 */
class HIL001 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HIL001;
