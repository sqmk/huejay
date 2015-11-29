#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving supported time zones...');

client.timeZones.getAll()
  .then(timeZones => {
    console.log('Time Zones:');
    for (let tz of timeZones) {
      console.log(`  ${tz}`);
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
