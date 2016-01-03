'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Schedule         = require('../Model/Schedule');

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

    this.Schedule = Schedule;
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
   * @param {Schedule} schedule Schedule
   *
   * @return {Promise} Promise for chaining
   */
  create(schedule) {
    return this.client.invokeCommand(
      new CreateSchedule(schedule)
    );
  }

  /**
   * Save schedule
   *
   * @param {Schedule} schedule Schedule
   *
   * @return {Promise} Promise for chaining
   */
  save(schedule) {
    return this.client.invokeCommand(
      new SaveSchedule(schedule)
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
