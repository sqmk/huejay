'use strict';

const DEFAULT_CONDITION = {
  sensorId:  null,
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

    for (let key in condition) {
      this.condition[key] = condition[key];
    }
  }

  /**
   * Get sensor id
   *
   * @return {int} Sensor Id
   */
  get sensorId() {
    return this.condition.sensorId;
  }

  /**
   * Set sensor id
   *
   * @param {string} sensorId Sensor Id
   */
  set sensorId(sensorId) {
    this.condition.sensorId = String(sensorId);
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
    this.attribute = String(attribute);

    return this;
  }

  /**
   * Greater than value
   *
   * @param {string} value Value
   */
  greaterThan(value) {
    this.operator = 'greaterThan';
    this.value    = value;
  }

  /**
   * Less than value
   *
   * @param {string} value Value
   */
  lessThan(value) {
    this.operator = 'lessThan';
    this.value    = value;
  }

  /**
   * Equals value
   *
   * @param {string} value Value
   */
  equals(value) {
    this.operator = 'equals';
    this.value    = value;
  }

  /**
   * Changes (value changes)
   */
  changes() {
    this.operator = 'changes';
    this.value    = null;
  }
}

module.exports = Condition;
