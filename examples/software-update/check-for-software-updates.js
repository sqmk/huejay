#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Checking for software update (${client.host})...`);

client.softwareUpdate.check()
  .then(() => {
    console.log('Retrieving software update details...');

    return client.softwareUpdate.get();
  })
  .then(softwareUpdate => {
    console.log(`  Checking: ${softwareUpdate.checkingEnabled}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
