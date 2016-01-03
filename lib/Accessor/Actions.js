'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Action helpers
let ChangeLightState = require('../Action/ChangeLightState');
let ChangeGroupState = require('../Action/ChangeGroupState');

/**
 * Actions accessor
 */
class Actions extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.ChangeLightState = ChangeLightState;
    this.ChangeGroupState = ChangeGroupState;
  }
}

module.exports = Actions;
