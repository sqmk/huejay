#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving schedule capabilities...');

client.capabilities.schedules()
  .then(schedules => {
    console.log('Schedules:');
    console.log(`  Available: ${schedules.available}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
