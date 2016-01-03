'use strict';

let moment  = require('moment');
let sprintf = require('sprintf-js').sprintf;

/**
 * Randomized time
 */
class RandomizedTime {
  /**
   * Constructor
   *
   * @param {string} date          Date
   * @param {int}    withinSeconds Randomize within seconds
   */
  constructor(date, withinSeconds) {
    this.date          = String(date);
    this.withinSeconds = parseInt(withinSeconds, 10);
  }

  /**
   * To string
   *
   * @return {string} Formatted time for scheduling
   */
  toString() {
    let schedule = moment(this.date).format('YYYY-MM-DD\THH:mm:ss');

    let hours   = parseInt(this.withinSeconds / 3600, 10);
    let minutes = parseInt(this.withinSeconds % 3600 / 60, 10);
    let seconds = this.withinSeconds % 60;

    schedule += sprintf('A%1$02d:%2$02d:%3$02d', hours, minutes, seconds);

    return schedule;
  }
}


module.exports = RandomizedTime;
