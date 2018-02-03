'use strict';

let AbstractSensorConfig = require('./AbstractSensorConfig');

/**
 * Abstract clip sensor config
 */
class AbstractClipSensorConfig extends AbstractSensorConfig {
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
   * Set battery level
   *
   * @param {int} level Level
   */
  set battery(level) {
    this.attributes.set('battery', parseInt(level, 10));
  }

  /**
   * Get URL
   *
   * @return {string} URL
   */
  get url() {
    return this.attributes.get('url');
  }

  /**
   * Set URL
   *
   * @param {string} url URL
   */
  set url(url) {
    this.attributes.set('url', String(url));
  }
}

module.exports = AbstractClipSensorConfig;
