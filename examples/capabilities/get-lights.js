#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving light capabilities...');

client.capabilities.lights()
  .then(lights => {
    console.log('Lights:');
    console.log(`  Available: ${lights.available}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
