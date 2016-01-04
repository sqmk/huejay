'use strict';

let Attributes     = require('./Attributes');
let AbstractAction = require('../Action/AbstractAction');

const DEFAULT_ATTRIBUTES = {
  'status':    'enabled',
  'autodelete': true,
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
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
  }

  /**
   * Get schedule id
   *
   * @return {string} Schedule id
   */
  get id() {
    return this.attributes.get('id');
  }

  /**
   * Get name
   *
   * @return {string} Name
   */
  get name() {
    return this.attributes.get('name');
  }

  /**
   * Set name
   *
   * @param {string} name Name
   */
  set name(name) {
    this.attributes.set('name', String(name));
  }

  /**
   * Get description
   *
   * @return {string} Description
   */
  get description() {
    return this.attributes.get('description');
  }

  /**
   * Set description
   *
   * @param {string} description Description
   */
  set description(description) {
    this.attributes.set('description', String(description));
  }

  /**
   * Get action
   *
   * @return {Object} Action
   */
  get action() {
    return this.attributes.get('command');
  }

  /**
   * Set action
   *
   * @param {Object} action Action
   */
  set action(action) {
    if (!(action instanceof AbstractAction)) {
      throw new Error({
        message: 'Expecting Action'
      });
    }

    this.attributes.set('command', action);
  }

  /**
   * Get created time
   *
   * @return {string} Created time
   */
  get created() {
    return this.attributes.get('created');
  }

  /**
   * Get status
   *
   * @return {string} Status
   */
  get status() {
    return String(this.attributes.get('status'));
  }

  /**
   * Set status
   *
   * @param {string} value Value
   */
  set status(value) {
    value = (value === 'enabled')
      ? 'enabled'
      : 'disabled';

    this.attributes.set('status', value);
  }

  /**
   * Get auto delete
   *
   * @return {bool} True to auto delete, false if not
   */
  get autoDelete() {
    return Boolean(this.attributes.get('autodelete'));
  }

  /**
   * Set auto delete
   *
   * @param {bool} value True to auto delete, false if not
   */
  set autoDelete(value) {
    this.attributes.set('autodelete', Boolean(value));
  }

  /**
   * Get local time (when schedule fires)
   *
   * @return {string} Local time
   */
  get localTime() {
    return String(this.attributes.get('localtime'));
  }

  /**
   * Set local time
   *
   * @param {mixed} date Custom date, or time pattern
   */
  set localTime(date) {
    this.attributes.set('localtime', String(date));
  }

  /**
   * Get start time
   *
   * @return {string} Start time
   */
  get startTime() {
    return this.attributes.get('starttime');
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

module.exports = Schedule;
