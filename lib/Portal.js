'use strict';

const ATTRIBUTE_MAP = {
  'signedon':      'signedOn',
  'incoming':      'incoming',
  'outgoing':      'outgoing',
  'communication': 'communication'
};

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
    this.setAttributes(attributes);
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
   * Is signed on
   *
   * @return {Boolean} True if signed on, false if not
   */
  get signedOn() {
    return Boolean(this.attributes.signedOn);
  }

  /**
   * Is incoming
   *
   * @return {Boolean} True if incoming, false if not
   */
  get incoming() {
    return Boolean(this.attributes.incoming);
  }

  /**
   * Is outgoing
   *
   * @return {Boolean} True if outgoing, false if not
   */
  get outgoing() {
    return Boolean(this.attributes.outgoing);
  }

  /**
   * Get communication
   *
   * @return {string} Communication type
   */
  get communication() {
    return this.attributes.communication;
  }
}

module.exports = Portal;
