#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Installing software updates (${client.host})...`);

client.softwareUpdate.install()
  .then(() => {
    console.log('Retrieving software update details...');

    return client.softwareUpdate.get();
  })
  .then(softwareUpdate => {
    console.log(`  State: ${softwareUpdate.state}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
