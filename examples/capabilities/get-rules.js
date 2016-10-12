#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving rule capabilities...');

client.capabilities.rules()
  .then(rules => {
    console.log('Rules:');
    console.log(`  Available: ${rules.available}`);
    console.log(`  Conditions Available: ${rules.conditionsAvailable}`);
    console.log(`  Actions Available: ${rules.actionsAvailable}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
