#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Disabling install notification (${client.host})...`);

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
