'use strict';

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
    attributes.id = id;

    this.attributes = attributes;
  }
}

module.exports = Schedule;
