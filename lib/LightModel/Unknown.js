'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           null,
  manufacturer: null,
  name:         null,
  type:         null,
  colorGamut:   null,
  friendsOfHue: false
};

/**
 * Light model: Unknown
 */
class Unknown extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Unknown;
