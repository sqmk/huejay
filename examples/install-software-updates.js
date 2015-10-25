#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log(`Installing software updates (${credentials.host})...`);

client.installSoftwareUpdates()
  .then(() => {
    console.log('Retrieving software update details...');

    return client.getSoftwareUpdate();
  })
  .then(softwareUpdate => {
    console.log(`  State: ${softwareUpdate.state}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
