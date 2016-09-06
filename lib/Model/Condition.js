'use strict';

let moment  = require('moment');

let SensorUtils = require('../Command/Sensor/Utils');

const DEFAULT_CONDITION = {
  sensor:    null,
  attribute: null,
  operator:  null,
  value:     null,
};

/**
 * Condition
 *
 * Condition object
 */
class Condition {
  /**
   * Constructor
   *
   * @param {Object} condition Condition
   */
  constructor(condition) {
    this.condition = Object.assign({}, DEFAULT_CONDITION);
  }

  /**
   * Get sensor
   *
   * @return {mixed} Sensor
   */
  get sensor() {
    return this.condition.sensor;
  }

  /**
   * Set sensor
   *
   * @param {Sensor} sensor Sensor
   */
  set sensor(sensor) {
    SensorUtils.validateSensor(sensor);

    this.condition.sensor = sensor;
  }

  /**
   * Get attribute
   *
   * @return {string} Attribute
   */
  get attribute() {
    return this.condition.attribute;
  }

  /**
   * Set attribute
   *
   * @param {string} attribute Attribute
   */
  set attribute(attribute) {
    this.condition.attribute = String(attribute);
  }

  /**
   * Get operator
   *
   * @return {string} Operator
   */
  get operator() {
    return this.condition.operator;
  }

  /**
   * Set operator
   *
   * @param {string} operator Operator
   */
  set operator(operator) {
    this.condition.operator = String(operator);
  }

  /**
   * Get value
   *
   * @return {mixed} Value
   */
  get value() {
    return this.condition.value;
  }

  /**
   * Set value
   *
   * @param {mixed} value Value
   */
  set value(value) {
    this.condition.value = value;
  }

  /**
   * When (field changes)
   *
   * @param {string} attribute State attribute
   *
   * @return {Condition} This object
   */
  when(attribute) {
    let stateMap = this.sensor.state.stateMap;

    this.attribute = (attribute in stateMap)
      ? stateMap[attribute]
      : String(attribute);

    return this;
  }

  /**
   * Greater than value
   *
   * @param {string} value Value
   */
  greaterThan(value) {
    this.operator = 'gt';
    this.value    = String(value);
  }

  /**
   * Less than value
   *
   * @param {string} value Value
   */
  lessThan(value) {
    this.operator = 'lt';
    this.value    = String(value);
  }

  /**
   * Equals value
   *
   * @param {string} value Value
   */
  equals(value) {
    this.operator = 'eq';
    this.value    = String(value);
  }

  /**
   * Changes (value changes)
   */
  changes() {
    this.operator = 'dx';
    this.value    = undefined;
  }

  /**
   * Delayed changes
   */
  delayedChanges() {
    this.operator = 'ddx';
    this.value    = undefined;
  }

  /**
   * Stable for (time)
   *
   * @param {int} time Time
   */
  stableFor(time) {
    this.operator = 'stable';
    this.value    = time;
  }

  /**
   * Unstable for (time)
   *
   * @param {int} time Time
   */
  unstableFor(time) {
    this.operator = 'not stable';
    this.value    = time;
  }

  /**
   * In (time)
   * 
   * @param {string} startTime Time
   * @param {string} endTime   Time
   */
  in(startTime, endTime) {
    let startHour = moment(startTime).format('[T]HH:mm:ss');
    let endHour   = moment(endTime).format('[T]HH:mm:ss');

    this.operator = 'in';
    this.value    = `${startHour}/${endHour}`;
  }

  /**
   * Not in (time)
   * 
   * @param {string} startTime Time
   * @param {string} endTime   Time
   */
  notIn(startTime, endTime) {
    let startHour = moment(startTime).format('[T]HH:mm:ss');
    let endHour   = moment(endTime).format('[T]HH:mm:ss');

    this.operator = 'not in';
    this.value    = `${startHour}/${endHour}`;
  }
}

module.exports = Condition;
