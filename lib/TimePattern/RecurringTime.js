'use strict';

let moment  = require('moment');

/**
 * Recurring time
 */
class RecurringTime {
  /**
   * Constructor
   *
   * @param {int}    daysOfWeek Days of week
   * @param {string} timeOfDay  Time of day
   */
  constructor(daysOfWeek, timeOfDay) {
    this.daysOfWeek = parseInt(daysOfWeek, 10);

    this.timeOfDay = moment(String(timeOfDay), 'HH:mm:ss').format('HH:mm:ss');
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
