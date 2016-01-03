'use strict';

let GetSensors = require('./GetSensors');

/**
 * Get new sensors command
 *
 * Get a list of new sensors
 */
class GetNewSensors {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/sensors/new`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        delete result.lastscan;

        let newSensorIds = Object.keys(result);

        return client.invokeCommand(new GetSensors)
          .then(sensors => {
            let newSensors = [];

            for (let sensor of sensors) {
              if (newSensorIds.indexOf(sensor.id) > -1) {
                newSensors.push(sensor);
              }
            }

            return newSensors;
          });
      });
  }
}

module.exports = GetNewSensors;
