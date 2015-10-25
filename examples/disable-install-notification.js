#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log(`Disabling install notification (${credentials.host})...`);

client.disableInstallNotification()
  .then(() => {
    console.log('Retrieving software update details...');

    return client.getSoftwareUpdate();
  })
  .then(softwareUpdate => {
    console.log(`  Install notification: ${softwareUpdate.installNotificationEnabled}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
