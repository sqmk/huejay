#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving internet services (${client.host})...`);

client.internetServices.get()
  .then(internetServices => {
    console.log(`Internet services:`);
    console.log(`  Internet connected: ${internetServices.internetConnected}`);
    console.log(`  Remote access connected: ${internetServices.remoteAccessConnected}`);
    console.log(`  Time sync connected: ${internetServices.timeSyncConnected}`);
    console.log(`  Software update connected: ${internetServices.softwareUpdateConnected}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
