'use strict';

const ATTRIBUTE_MAP = {
  'id':          'id',
  'name':        'name',
  'description': 'description',
  'command':     'command',
  'localtime':   'localTime',
  'starttime':   'startTime',
  'status':      'status',
  'autodelete':  'autoDelete',
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
   * @param {string} id         Id
   * @param {Object} attributes Attributes
   */
  constructor(id, attributes) {
    attributes.id = id;

    this.attributes = attributes;
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
}

module.exports = Schedule;
