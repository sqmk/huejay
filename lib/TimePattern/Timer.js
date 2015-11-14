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
    this.seconds = parseInt(seconds);
    this.repeat  = repeat !== undefined ? parseInt(repeat) : null;
  }

  /**
   * To string
   *
   * @return {string} Formatted time for scheduling
   */
  toString() {
    let hours   = parseInt(this.seconds / 3600);
    let minutes = parseInt(this.seconds % 3600 / 60);
    let seconds = this.seconds % 60;

    let schedule = sprintf('PT%1$02d:%2$02d:%3$02d', hours, minutes, seconds);

    if (this.repeat !== null) {
      schedule = sprintf('R%1$02d/%2$s', this.repeat, schedule);
    }

    return schedule;
  }
}

module.exports = Timer;
