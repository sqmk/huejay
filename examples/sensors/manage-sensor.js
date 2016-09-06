#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating sensor...');

let sensor = new client.sensors.Sensor;
sensor.name            = 'Sensor name here';
sensor.modelId         = 'Sensormodel';
sensor.softwareVersion = '1.2.3';
sensor.type            = 'CLIPTemperature';
sensor.uniqueId        = '123.456.789';
sensor.manufacturer    = 'Huejay';

sensor.config.on         = false;
sensor.state.temperature = 10.2;

client.sensors.create(sensor)
  .then(sensor => {
    console.log(`New sensor [${sensor.id}]: ${sensor.name}`);
    console.log(`  Type: ${sensor.type}`);
    console.log(`  Model Id: ${sensor.modelId}`);
    console.log(`  Manufacturer: ${sensor.manufacturer}`);
    console.log(`  Software Version: ${sensor.softwareVersion}`);
    console.log(`  Unique Id: ${sensor.uniqueId}`);
    console.log(`  Config:`);
    console.log(`    On: ${sensor.config.on}`);
    console.log(`  State:`);
    console.log(`    Temperature: ${sensor.state.temperature}`);
    console.log();

    console.log(`Retrieving sensor ${sensor.id}`);

    return client.sensors.getById(sensor.id);
  })
  .then(sensor => {
    console.log('Updating sensor and changing state');

    sensor.name = 'New sensor name here';

    sensor.config.on = false;
    sensor.state.temperature = 28.5;

    return client.sensors.save(sensor);
  })
  .then(sensor => {
    console.log('Deleting sensor');

    return client.sensors.delete(sensor);
  })
  .catch(error => {
    console.log(error.stack);
  });
