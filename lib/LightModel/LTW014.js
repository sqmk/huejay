'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LTW014',
  manufacturer: 'Philips',
  name:         'Hue GU-10 White Ambience',
  type:         'Color Temperature Light',
  colorGamut:   '2200K-6500K',
  friendsOfHue: true
};

/**
 * Light model: LTW014
 */
class LTW014 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LTW014;
