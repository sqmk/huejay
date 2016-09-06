'use strict';

let AbstractAction = require('./AbstractAction');
let SensorUtils    = require('../Command/Sensor/Utils');

/**
 * Change sensor state action
 */
class ChangeSensorState extends AbstractAction {
  /**
   * Constructor
   *
   * @param {Sensor} sensor   Sensor
   * @param {array}  useState State to use
   */
  constructor(sensor, useState) {
    super();

    SensorUtils.validateSensor(sensor);

    this.sensor   = sensor;
    this.useState = useState;
  }

  /**
   * Export action
   *
   * @param {client} client Client
   *
   * @return {Object} Action object
   */
  exportAction(client, withUsername) {
    let address = `/sensors/${this.sensor.id}/state`;
    let body    = {};
    let sensorStateMap = this.sensor.state.stateMap;

    if (this.useState !== undefined) {
      for (let key of this.useState) {
        if (key in sensorStateMap) {
          let stateAttribute = sensorStateMap[key];
          body[stateAttribute] = this.sensor.state.attributes.get(stateAttribute);
        }
      }
    } else {
      body = this.sensor.state.attributes.getChanged();
    }

    if (!!withUsername) {
      address = `/api/${client.username}${address}`;
    }

    return {
      method: 'PUT',
      address,
      body,
    }
  }
}

module.exports = ChangeSensorState;
