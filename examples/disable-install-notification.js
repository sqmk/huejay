#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log(`Disabling install notification (${credentials.host})...`);

client.softwareUpdate.disableInstallNotification()
  .then(() => {
    console.log('Retrieving software update details...');

    return client.softwareUpdate.get();
  })
  .then(softwareUpdate => {
    console.log(`  Install notification: ${softwareUpdate.installNotificationEnabled}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
