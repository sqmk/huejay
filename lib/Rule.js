'use strict';

let Error = require('./Error');

const ATTRIBUTE_MAP = {
  'name':           'name',
  'lasttriggered':  'lastTriggered',
  'creationtime':   'creationTime',
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
   * @param {string} id         Id
   * @param {Object} attributes Attributes
   */
  constructor(id, attributes) {
    if (id !== undefined) {
      attributes.id = id;
    }

    this.setAttributes(attributes);
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
   * @return {string} Date
   */
  get lastTriggered() {
    return this.attributes.lastTriggered;
  }

  /**
   * Get creation time
   *
   * @return {string} Date
   */
  get creationTime() {
    return this.attributes.creationTime;
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
