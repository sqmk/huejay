#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving sensor capabilities...');

client.capabilities.sensors()
  .then(sensors => {
    console.log('Sensors:');
    console.log(`  Available: ${sensors.available}`);
    console.log(`  CLIP Available: ${sensors.clipAvailable}`);
    console.log(`  ZLL Available: ${sensors.zllAvailable}`);
    console.log(`  ZGP Available: ${sensors.zgpAvailable}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
