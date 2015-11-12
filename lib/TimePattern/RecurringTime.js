'use strict';

let sprintf = require('sprintf-js').sprintf;

/**
 * Recurring time
 */
class RecurringTime {
  /**
   * Constructor
   *
   * @param {int} daysOfWeek Days of week
   * @param {int} hour       Hour
   * @param {int} minute     Minute
   * @param {int} second     Second
   */
  constructor(daysOfWeek, hour, minute, second) {
    this.daysOfWeek = parseInt(daysOfWeek);

    hour   = hour   === undefined ? 0 : parseInt(hour);
    minute = minute === undefined ? 0 : parseInt(minute);
    second = second === undefined ? 0 : parseInt(second);

    this.timeOfDay = sprintf('%1$02d:%2$02d:%3$02d', hour, minute, second);
  }

  /**
   * To string
   *
   * @return {string} Formatted time for scheduling
   */
  toString() {
    return `W${this.daysOfWeek}/T${this.timeOfDay}`;
  }
}

// Weekdays
RecurringTime.MONDAY    = 64;
RecurringTime.TUESDAY   = 32;
RecurringTime.WEDNESDAY = 16;
RecurringTime.THURSDAY  = 8;
RecurringTime.FRIDAY    = 4;
RecurringTime.SATURDAY  = 2;
RecurringTime.SUNDAY    = 1;

// Grouped days
RecurringTime.WEEKDAY   = 124;
RecurringTime.WEEKEND   = 3;

module.exports = RecurringTime;
