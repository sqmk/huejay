'use strict';

let moment  = require('moment');

/**
 * Absolute time
 */
class AbsoluteTime {
  /**
   * Constructor
   *
   * @param {string} date Date
   */
  constructor(date) {
    this.date = String(date);
  }

  /**
   * To string
   *
   * @return {string} Formatted time for scheduling
   */
  toString() {
    return moment(this.date).format('YYYY-MM-DD[T]HH:mm:ss');
  }
}

module.exports = AbsoluteTime;
