#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving sensors...');
console.log();

client.sensors.getAll()
  .then(sensors => {
    for (let sensor of sensors) {
      console.log(`Sensor [${sensor.id}]: ${sensor.name}`);
      console.log(`  Type:             ${sensor.type}`);
      console.log(`  Manufacturer:     ${sensor.manufacturer}`);
      console.log(`  Model Id:         ${sensor.modelId}`);
      console.log('  Model:');
      console.log(`    Id:             ${sensor.model.id}`);
      console.log(`    Manufacturer:   ${sensor.model.manufacturer}`);
      console.log(`    Name:           ${sensor.model.name}`);
      console.log(`    Type:           ${sensor.model.type}`);
      console.log(`  Software Version: ${sensor.softwareVersion}`);
      console.log(`  Unique Id:        ${sensor.uniqueId}`);
      console.log(`  Config:`);
      console.log(`    On:             ${sensor.config.on}`);
      console.log(`  State:`);
      console.log(`    Last Updated:   ${sensor.state.lastUpdated}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
