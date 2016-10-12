#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving resource links capabilities...');

client.capabilities.resourceLinks()
  .then(resourceLinks => {
    console.log('Resource Links:');
    console.log(`  Available: ${resourceLinks.available}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
