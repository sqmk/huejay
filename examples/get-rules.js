#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving rules...');
console.log();

client.getRules()
  .then(rules => {
    for (let rule of rules) {
      console.log(`Rule [${rule.id}]: ${rule.name}`);
      console.log(`  Last Triggered: ${rule.lastTriggered}`);
      console.log(`  Created: ${rule.created}`);
      console.log(`  Times Triggered: ${rule.timesTriggered}`);
      console.log(`  Owner: ${rule.owner}`);
      console.log(`  Status: ${rule.status}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
