'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPLightLevel sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get state map
   *
   * @return {Object} State map
   */
  get stateMap() {
    return Object.assign(super.stateMap, {
      lightLevel: 'lightlevel',
      dark:       'dark',
      daylight:   'daylight'
    });
  }

  /**
   * Get light level
   *
   * @return {int} Light level
   */
  get lightLevel() {
    return this.attributes.get('lightlevel');
  }

  /**
   * Get dark stats
   *
   * @return {int} Is dark?
   */
  get dark() {
    return Boolean(this.attributes.get('dark'));
  }

  /**
   * Get daylight status
   *
   * @return {bool} Is daylight?
   */
  get daylight() {
    return Boolean(this.attributes.get('daylight'));
  }
}

module.exports = State;
