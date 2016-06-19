'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Action helpers
let ChangeLightState  = require('../Action/ChangeLightState');
let ChangeGroupAction = require('../Action/ChangeGroupAction');

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

    this.ChangeLightState  = ChangeLightState;
    this.ChangeGroupAction = ChangeGroupAction;
  }
}

module.exports = Actions;
