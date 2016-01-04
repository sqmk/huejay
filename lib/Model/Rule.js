'use strict';

let Attributes     = require('./Attributes');
let AbstractAction = require('../Action/AbstractAction');
let Condition      = require('./Condition');
let Error          = require('../Error');

const MAX_CONDITIONS     = 8;
const MAX_ACTIONS        = 8;
const DEFAULT_ATTRIBUTES = {
  status:     'enabled',
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
    this.attributes = new Attributes(attributes, DEFAULT_ATTRIBUTES);
  }

  /**
   * Get Id
   *
   * @return {string} Id
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
   * Get created time
   *
   * @return {string} Date
   */
  get created() {
    return this.attributes.get('created');
  }

  /**
   * Get last triggered date
   *
   * @return {mixed} Date string, or null if none
   */
  get lastTriggered() {
    return this.attributes.get('lasttriggered') !== 'none'
      ? this.attributes.get('lasttriggered')
      : null
  }

  /**
   * Times triggered
   *
   * @return {int} Number of times triggered
   */
  get timesTriggered() {
    return this.attributes.get('timestriggered');
  }

  /**
   * Get owner
   *
   * @return {string} Owner
   */
  get owner() {
    return this.attributes.get('owner');
  }

  /**
   * Get status
   *
   * @return {string} Status
   */
  get status() {
    return this.attributes.get('status');
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
   * Get conditions
   *
   * @return {array} Conditions
   */
  get conditions() {
    return this.attributes.get('conditions');
  }

  /**
   * Set conditions
   *
   * @param {Array} conditions Conditions
   */
  set conditions(conditions) {
    this.attributes.set('conditions', conditions);
  }

  /**
   * Add condition
   *
   * @param {Sensor} Sensor or Sensor Id
   *
   * @return {Condition} Condition
   */
  addCondition(sensor) {
    let conditions = this.conditions;

    if ((conditions.length + 1) > MAX_CONDITIONS) {
      throw new Error({
        message: `May not add more than ${MAX_CONDITIONS} conditions to Rule`
      });
    }

    // Initialize condition
    let condition = new Condition;
    condition.sensor = sensor;

    // Add to existing conditions
    conditions.push(condition);

    this.conditions = conditions;

    return condition;
  }

  /**
   * Clear conditions
   */
  clearConditions() {
    this.conditions = [];
  }

  /**
   * Get actions
   *
   * @return {array} Array
   */
  get actions() {
    return this.attributes.get('actions');
  }

  /**
   * Set actions
   *
   * @param {Array} actions Actions
   */
  set actions(actions) {
    return this.attributes.set('actions', actions);
  }

  /**
   * Add action
   *
   * @param {Object} action Action
   */
  addAction(action) {
    if (!(action instanceof AbstractAction)) {
      throw new Error({
        message: 'Expecting Action'
      });
    }

    let actions = this.actions;

    if ((actions.length + 1) > MAX_ACTIONS) {
      throw new Error({
        message: `May not add more than ${MAX_ACTIONS} actions to Rule`
      });
    }

    actions.push(action);

    this.actions = actions;
  }

  /**
   * Clear actions
   */
  clearActions() {
    this.actions = [];
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

module.exports = Rule;
