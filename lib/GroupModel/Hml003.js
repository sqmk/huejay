'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML003',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Pendant',
  type:         'Luminaire',
};

/**
 * Group model: HML003
 */
class Hml003 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Hml003;
