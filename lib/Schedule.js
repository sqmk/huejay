'use strict';

let Error = require('./Error');

const ATTRIBUTE_MAP = {
  'id':          'id',
  'name':        'name',
  'description': 'description',
  'command':     'command',
  'localtime':   'localTime',
  'created':     'created',
  'status':      'status',
  'autodelete':  'autoDelete',
  'starttime':   'startTime',
};

/**
 * Schedule
 *
 * Schedule object
 */
class Schedule {
  /**
   * Constructor
   *
   * @param {string} id         Id
   * @param {Object} attributes Attributes
   */
  constructor(id, attributes) {
    if (id != undefined) {
      attributes.id = id;
    }

    this.setAttributes(attributes);
  }

  /**
   * Validate schedule
   *
   * @param {Schedule} schedule Schedule
   */
  static validateSchedule(schedule) {
    validateSchedule(schedule);
  }

  /**
   * Get schedule id
   *
   * @return {string} Schedule id
   */
  get id() {
    return this.attributes.id;
  }

  /**
   * Get name
   *
   * @return {string} Name
   */
  get name() {
    return this.attributes.name;
  }

  /**
   * Set name
   *
   * @param {string} name Name
   */
  set name(name) {
    this.attributes.name = String(name);
  }

  /**
   * Get description
   *
   * @return {string} Description
   */
  get description() {
    return this.attributes.description;
  }

  /**
   * Set description
   *
   * @param {string} description Description
   */
  set description(description) {
    this.attributes.description = String(description);
  }

  /**
   * Get command
   *
   * @return {Object} Command
   */
  get command() {
    return this.attributes.command;
  }

  /**
   * Get created time
   *
   * @return {string} Created time
   */
  get created() {
    return this.attributes.created;
  }

  /**
   * Get status
   *
   * @return {string} Status
   */
  get status() {
    return String(this.attributes.status);
  }

  /**
   * Set status
   *
   * @param {string} value Value
   */
  set status(value) {
    this.attributes.status = (value === 'enabled')
      ? 'enabled'
      : 'disabled';
  }

  /**
   * Get auto delete
   *
   * @return {bool} True to auto delete, false if not
   */
  get autoDelete() {
    return Boolean(this.attributes.autoDelete);
  }

  /**
   * Set auto delete
   *
   * @param {bool} value True to auto delete, false if not
   */
  set autoDelete(value) {
    this.attributes.autoDelete = Boolean(value);
  }

  /**
   * Get local time (when schedule fires)
   *
   * @return {string} Local time
   */
  get localTime() {
    return String(this.attributes.localTime);
  }

  /**
   * Set local time
   *
   * @param {mixed} date Custom date, or time pattern
   */
  set localTime(date) {
    this.attributes.localTime = String(date);
  }

  /**
   * Get start time
   *
   * @return {string} Start time
   */
  get startTime() {
    return this.attributes.startTime;
  }

  /**
   * Set attributes
   *
   * @param {Object} attributes Attributes
   */
  setAttributes(attributes) {
    this.attributes = {};

    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        this.attributes[ATTRIBUTE_MAP[key]] = attributes[key];
      }
    }
  }

  /**
   * To string
   *
   * @return {string} Id
   */
  toString() {
    return this.id;
  }
}

// Include time patterns
Schedule.AbsoluteTime   = require('./TimePattern/AbsoluteTime');
Schedule.RandomizedTime = require('./TimePattern/RandomizedTime');
Schedule.RecurringTime  = require('./TimePattern/RecurringTime');
Schedule.Timer          = require('./TimePattern/Timer');

/**
 * Validate schedule
 *
 * @param {mixed} schedule Schedule object
 */
function validateSchedule(schedule) {
  if (!(schedule instanceof Schedule)) {
    throw new Error({
      description: 'Expecting Schedule'
    });
  }
}

module.exports = Schedule;
