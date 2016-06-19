'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML005',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Table',
  type:         'Luminaire',
};

/**
 * Group model: HML005
 */
class HML005 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HML005;
