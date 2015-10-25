#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log(`Checking for software update (${credentials.host})...`);

client.checkForSoftwareUpdates()
  .then(() => {
    console.log('Retrieving software update details...');

    return client.getSoftwareUpdate();
  })
  .then(softwareUpdate => {
    console.log(`  Checking: ${softwareUpdate.checkingEnabled}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
