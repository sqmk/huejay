'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LLC007',
  manufacturer: 'Philips',
  name:         'Living Colors Gen3 Bloom',
  type:         'Color Light',
  colorGamut:   'A',
  friendsOfHue: false
};

/**
 * Light model: LLC007
 */
class LLC007 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LLC007;
