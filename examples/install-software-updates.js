#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log(`Installing software updates (${credentials.host})...`);

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
