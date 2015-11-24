'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Action           = require('../Model/Action');
let Schedule         = require('../Model/Schedule');

// Time patterns
let AbsoluteTime   = require('../TimePattern/AbsoluteTime');
let RandomizedTime = require('../TimePattern/RandomizedTime');
let RecurringTime  = require('../TimePattern/RecurringTime');
let Timer          = require('../TimePattern/Timer');

// Commands
let GetSchedules   = require('../Command/Schedule/GetSchedules');
let GetSchedule    = require('../Command/Schedule/GetSchedule');
let CreateSchedule = require('../Command/Schedule/CreateSchedule');
let SaveSchedule   = require('../Command/Schedule/SaveSchedule');
let DeleteSchedule = require('../Command/Schedule/DeleteSchedule');

/**
 * Schedules accessor
 */
class Schedules extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Action   = Action;
    this.Schedule = Schedule;

    // Time patterns
    this.AbsoluteTime   = AbsoluteTime;
    this.RandomizedTime = RandomizedTime;
    this.RecurringTime  = RecurringTime;
    this.Timer          = Timer;
  }

  /**
   * Get all schedules
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    return this.client.invokeCommand(new GetSchedules);
  }

  /**
   * Get schedule
   *
   * @param {string} id Schedule Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(id) {
    return this.client.invokeCommand(new GetSchedule(id));
  }

  /**
   * Create schedule
   *
   * @param {Schedule} schedule    Schedule
   * @param {mixed}    model       Model
   * @param {Array}    filterState Filter state (optional)
   *
   * @return {Promise} Promise for chaining
   */
  create(schedule, model, filterState) {
    return this.client.invokeCommand(
      new CreateSchedule(schedule, model, filterState)
    );
  }

  /**
   * Save schedule
   *
   * @param {Schedule} schedule    Schedule
   * @param {mixed}    model       Model
   * @param {Array}    filterState Filter state (optional)
   *
   * @return {Promise} Promise for chaining
   */
  save(schedule, model, filterState) {
    return this.client.invokeCommand(
      new SaveSchedule(schedule, model, filterState)
    );
  }

  /**
   * Delete schedule
   *
   * @param {mixed} Schedule object or schedule Id
   *
   * @return {Promise} Promise for chaining
   */
  delete(schedule) {
    return this.client.invokeCommand(new DeleteSchedule(schedule));
  }
}

module.exports = Schedules;
