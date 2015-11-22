'use strict';

let Error = require('./Error');

const ATTRIBUTE_MAP = {
  'id':             'id',
  'name':           'name',
  'lasttriggered':  'lastTriggered',
  'created':        'created',
  'timestriggered': 'timesTriggered',
  'owner':          'owner',
  'status':         'status'
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
    this.setAttributes(attributes);
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
   * Set attributes
   *
   * @param {Object} attributes Attributes
   */
  setAttributes(attributes) {
    this.attributes = {};

    for (let key in attributes) {
      let attributeKey = key;
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

module.exports = Rule;
