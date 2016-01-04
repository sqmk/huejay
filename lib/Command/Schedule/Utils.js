'use strict';

let Error          = require('../../Error');
let AbstractAction = require('../../Action/AbstractAction');
let Schedule       = require('../../Model/Schedule');

const SCHEDULE_ATTRIBUTES = [
  'id',
  'name',
  'description',
  'command',
  'localtime',
  'created',
  'status',
  'autodelete',
  'starttime'
];

/**
 * Schedule utils
 */
class Utils {
  /**
   * Validate schedule
   *
   * @param {mixed} schedule Schedule object
   *
   * @return {bool} True if valid
   */
  static validateSchedule(schedule) {
    if (schedule instanceof Schedule) {
      return true;
    }

    throw new Error({
      message: 'Expecting Schedule'
    });
  }

  /**
   * Build schedule
   *
   * @param {Object} result Result
   *
   * @return {Schedule} Schedule
   */
  static buildSchedule(result) {
    return new Schedule(
      this.mapScheduleAttributes(result)
    );
  }

  /**
   * Map schedule attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapScheduleAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of SCHEDULE_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }

  /**
   * Convert schedule action
   *
   * @param {Schedule} schedule Schedule
   * @param {Client}   client   Client
   */
  static convertAction(schedule, client) {
    let action = schedule.attributes.get('command');

    if (!(action instanceof AbstractAction)) {
      return;
    }

    schedule.attributes.set('command', action.exportAction(client, true));
  }
}

module.exports = Utils;
