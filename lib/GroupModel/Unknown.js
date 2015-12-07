'use strict';

let AbstractGroupModel = require('./AbstractGroupModel');

const DETAILS = {
  id:           null,
  manufacturer: null,
  name:         null,
  type:         null,
};

/**
 * Group model: Unknown
 */
class Unknown extends AbstractGroupModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = Unknown;
