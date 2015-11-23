#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Creating sensor...');

let sensor = new client.sensors.Sensor;
sensor.name             = 'Sensor name here';
sensor.modelId          = 'Sensormodel';
sensor.softwareVersion  = '1.2.3';
sensor.type             = 'CLIPGenericFlag';
sensor.uniqueId         = '123.456.789';
sensor.manufacturer     = 'Huejay';

sensor.config.on  = false;
sensor.state.flag = true;

client.sensors.create(sensor)
  .then(sensor => {
    console.log(`New sensor [${sensor.id}]: ${sensor.name}`);
    console.log(`  Type: ${sensor.type}`);
    console.log(`  Model Id: ${sensor.modelId}`);
    console.log(`  Manufacturer: ${sensor.manufacturer}`);
    console.log(`  Software Version: ${sensor.softwareVersion}`);
    console.log(`  Unique Id: ${sensor.uniqueId}`);
    console.log(`  Config:`);
    for (let key in sensor.config) {
      console.log(`    ${key}: ${sensor.config[key]}`);
    }

    console.log(`  State:`);
    for (let key in sensor.state) {
      console.log(`    ${key}: ${sensor.state[key]}`);
    }

    return sensor.id;
  })
  .then(sensorId => {
    console.log(`Retrieving sensor ${sensorId}`);

    return client.sensors.getById(sensorId);
  })
  .then(sensor => {
    console.log('Updating sensor and changing state');

    sensor.name = 'New sensor name here';

    sensor.config.on  = false;
    sensor.state.flag = true;

    return client.sensors.save(sensor);
  })
  .then(sensor => {
    console.log('Deleting sensor');

    return client.sensors.delete(sensor);
  })
  .catch(error => {
    console.log(error.stack);
  });
