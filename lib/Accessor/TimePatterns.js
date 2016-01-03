'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Time patterns
let AbsoluteTime   = require('../TimePattern/AbsoluteTime');
let RandomizedTime = require('../TimePattern/RandomizedTime');
let RecurringTime  = require('../TimePattern/RecurringTime');
let Timer          = require('../TimePattern/Timer');

/**
 * Time patterns accessor
 */
class TimePatterns extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.AbsoluteTime   = AbsoluteTime;
    this.RandomizedTime = RandomizedTime;
    this.RecurringTime  = RecurringTime;
    this.Timer          = Timer;
  }
}

module.exports = TimePatterns;
