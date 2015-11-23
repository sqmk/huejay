'use strict';

let Condition = require('./Condition');
let Error     = require('../Error');

const MAX_CONDITIONS     = 8;
const MAX_ACTIONS        = 4;
const DEFAULT_ATTRIBUTES = {
  conditions: [],
  actions:    [],
};

/**
 * Rule
 *
 * Rule object
 */
class Rule {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = Object.assign({}, DEFAULT_ATTRIBUTES, attributes);
  }

  /**
   * Validate rule
   *
   * @param {Rule} rule Rule
   */
  static validateRule(rule) {
    validateRule(rule);
  }

  /**
   * Get Id
   *
   * @return {string} Id
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
   * Get last triggered date
   *
   * @return {mixed} Date string, or null if none
   */
  get lastTriggered() {
    return this.attributes.lastTriggered !== 'none'
      ? this.attributes.lastTriggered
      : null
  }

  /**
   * Get created time
   *
   * @return {string} Date
   */
  get created() {
    return this.attributes.created;
  }

  /**
   * Times triggered
   *
   * @return {int} Number of times triggered
   */
  get timesTriggered() {
    return this.attributes.timesTriggered;
  }

  /**
   * Get owner
   *
   * @return {string} Owner
   */
  get owner() {
    return this.attributes.owner;
  }

  /**
   * Get status
   *
   * @return {string} Status
   */
  get status() {
    return this.attributes.status;
  }

  /**
   * Get conditions
   *
   * @return {array} Conditions
   */
  get conditions() {
    return this.attributes.conditions;
  }

  /**
   * Add condition
   *
   * @param {mixed} Sensor or Sensor Id
   *
   * @return {Condition} Condition
   */
  addCondition(sensor) {
    if ((this.conditions.length + 1) > MAX_CONDITIONS) {
      throw new Error({
        description: `May not add more than ${MAX_CONDITIONS} to Rule`
      });
    }

    let condition = new Condition({
      sensorId: sensor
    });

    this.conditions.push(condition);

    return condition;
  }

  /**
   * Clear conditions
   */
  clearConditions() {
    this.attributes.conditions = [];
  }

  /**
   * Get actions
   *
   * @return {array} Array
   */
  get actions() {
    return this.attributes.actions;
  }

  /**
   * Clear actions
   */
  clearActions() {
    this.attributes.actions = [];
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

/**
 * Validate rule
 *
 * @param {mixed} rule Rule object
 */
function validateRule(rule) {
  if (!(rule instanceof Rule)) {
    throw new Error({
      description: 'Expecting Rule'
    });
  }
}

module.exports = Rule;
