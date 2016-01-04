#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Updating sensor...');

client.sensors.getById(31)
  .then(sensor => {
    sensor.state.buttonEvent = 42;

    return client.sensors.save(sensor);
  })
  .catch(error => console.log(error.stack));
