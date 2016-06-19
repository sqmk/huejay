'use strict';

let Attributes = require('./Attributes');

const DEFAULT_ATTRIBUTES = {
  'type':    'Link',
  'classid': 0,
  'recycle': false,
  'links':   []
};

/**
 * Resource link
 *
 * Resource link object
 */
class ResourceLink {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes  = new Attributes(attributes, DEFAULT_ATTRIBUTES);
  }

  /**
   * Get id
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
   * Get type
   *
   * @return {string} Type
   */
  get type() {
    return this.attributes.get('type');
  }

  /**
   * Get class id
   *
   * @return {int} Class Id
   */
  get classId() {
    return this.attributes.get('classid');
  }

  /**
   * Set class id
   *
   * @param {string} classId Class Id
   */
  set classId(classId) {
    this.attributes.set('classid', Number(classId));
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
   * Get recycle
   *
   * @return {bool} Recycle
   */
  get recycle() {
    return this.attributes.get('recycle');
  }

  /**
   * Set recycle
   *
   * @param {bool} value True to automatically delete on no reference
   */
  set recycle(value) {
    this.attributes.set('recycle', Boolean(value));
  }

  /**
   * Get links
   *
   * @return {array} List of resource paths
   */
  get links() {
    return this.attributes.get('links');
  }

  /**
   * Set links
   *
   * @param {array} links List of resource paths
   */
  set links(links) {
    this.attributes.set('links', links);
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

module.exports = ResourceLink;
