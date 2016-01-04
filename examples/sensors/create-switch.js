#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating sensor...');

let sensor = new client.sensors.Sensor;
sensor.name            = 'Switch test';
sensor.modelId         = 'Sensormodel';
sensor.softwareVersion = '1.2.3';
sensor.type            = 'CLIPSwitch';
sensor.uniqueId        = '123.456.789';
sensor.manufacturer    = 'Huejay';

sensor.config.on         = true;
sensor.state.buttonEvent = 69;

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
    console.log(`    Button Event: ${sensor.state.buttonEvent}`);
    console.log();
  })
  .catch(error => console.log(error.stack));
