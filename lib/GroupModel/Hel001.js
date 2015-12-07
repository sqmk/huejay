'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HEL001',
  manufacturer: 'Philips',
  name:         'Hue Entity Table',
  type:         'Luminaire',
};

/**
 * Group model: HEL001
 */
class Hel001 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Hel001;
