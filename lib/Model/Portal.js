'use strict';

let Attributes = require('./Attributes');

/**
 * Portal object
 *
 * Portal connectivity details
 */
class Portal {
  /**
   * Constructor
   *
   * @param {Object} attributes Attributes
   */
  constructor(attributes) {
    this.attributes = new Attributes(attributes);
  }

  /**
   * Is signed on
   *
   * @return {Boolean} True if signed on, false if not
   */
  get signedOn() {
    return Boolean(this.attributes.get('signedon'));
  }

  /**
   * Is incoming
   *
   * @return {Boolean} True if incoming, false if not
   */
  get incoming() {
    return Boolean(this.attributes.get('incoming'));
  }

  /**
   * Is outgoing
   *
   * @return {Boolean} True if outgoing, false if not
   */
  get outgoing() {
    return Boolean(this.attributes.get('outgoing'));
  }

  /**
   * Get communication
   *
   * @return {string} Communication type
   */
  get communication() {
    return this.attributes.get('communication');
  }
}

module.exports = Portal;
