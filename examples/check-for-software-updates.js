#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log(`Checking for software update (${credentials.host})...`);

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
