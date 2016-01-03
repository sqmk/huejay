'use strict';

let sprintf = require('sprintf-js').sprintf;

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
    this.seconds = parseInt(seconds, 10);
    this.repeat  = repeat !== undefined ? parseInt(repeat, 10) : null;
  }

  /**
   * To string
   *
   * @return {string} Formatted time for scheduling
   */
  toString() {
    let hours   = parseInt(this.seconds / 3600, 10);
    let minutes = parseInt(this.seconds % 3600 / 60, 10);
    let seconds = this.seconds % 60;

    let schedule = sprintf('PT%1$02d:%2$02d:%3$02d', hours, minutes, seconds);

    if (this.repeat !== null) {
      schedule = sprintf('R%1$02d/%2$s', this.repeat, schedule);
    }

    return schedule;
  }
}

module.exports = Timer;
