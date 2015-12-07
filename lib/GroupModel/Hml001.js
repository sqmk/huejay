'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML001',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Centerpiece',
  type:         'Luminaire',
};

/**
 * Group model: HML001
 */
class Hml001 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Hml001;
