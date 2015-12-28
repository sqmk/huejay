'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           'HML002',
  manufacturer: 'Philips',
  name:         'Hue Phoenix Ceiling',
  type:         'Luminaire',
};

/**
 * Group model: HML002
 */
class HML002 extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = HML002;
