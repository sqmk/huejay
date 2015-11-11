'use strict';

let sprintf = require('sprintf-js').sprintf;
let moment  = require('moment');

/**
 * Timer
 */
class Timer {
  /**
   * Constructor
   *
   * @param {int}  seconds Seconds
   * @param {bool} repeat  Repeat
   */
  constructor(seconds, repeat) {
    this.seconds = parseInt(seconds);
    this.repeat  = repeat !== undefined ? parseInt(repeat) : null;
  }

  /**
   * To string
   *
   * @return {string} Formatted time for scheduling
   */
  toString() {
    let time = moment('0000-01-01')
      .add(this.seconds, 'seconds')
      .format('HH:mm:ss')

    let schedule = `P${time}`;

    if (this.repeat !== null) {
      schedule = sprintf('R%1$02d/%2$s', this.repeat, schedule);
    }

    return schedule;
  }
}

module.exports = Timer;
