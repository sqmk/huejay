'use strict';

let AbstractSensorConfig = require('./AbstractSensorConfig');

/**
 * Abstract ZLL sensor config
 */
class AbstractZLLSensorConfig extends AbstractSensorConfig {
  /**
   * Get reachable
   *
   * @return {bool} True if reachable, false if not
   */
  get reachable() {
    return this.attributes.get('reachable');
  }

  /**
   * Get battery level
   *
   * @return {int} Battery level
   */
  get battery() {
    return this.attributes.get('battery');
  }

  /**
   * Get alert
   *
   * @return {string} Alert value
   */
  get alert() {
    return this.attributes.get('alert');
  }

  /**
   * Set alert
   *
   * @param {bool} value Alert value
   */
  set alert(value) {
    this.attributes.set('alert', value);
  }

  /**
   * Is user test?
   *
   * @return {bool} True if user test mode, false if not
   */
  get userTest() {
    return this.attributes.get('usertest');
  }

  /**
   * Set user test
   *
   * @param {bool} value True or false
   */
  set userTest(value) {
    this.attributes.set('usertest', Boolean(value));
  }

  /**
   * Get pending config
   *
   * @return {array} List of configs pending change on device
   */
  get pending() {
    return this.attributes.get('pending');
  }

  /**
   * LED indication?
   *
   * @return {bool} True if LED indication, false if not
   */
  get ledIndication() {
    return this.attributes.get('ledindication');
  }

  /**
   * Set LED indication
   *
   * @param {bool} value True or false
   */
  set ledIndication(value) {
    this.attributes.set('ledindication', Boolean(value));
  }
}

module.exports = AbstractZLLSensorConfig;
