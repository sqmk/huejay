#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving group capabilities...');

client.capabilities.groups()
  .then(groups => {
    console.log('Groups:');
    console.log(`  Available: ${groups.available}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
