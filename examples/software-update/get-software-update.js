#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving software update details (${client.host})...`);

client.softwareUpdate.get()
  .then(softwareUpdate => {
    console.log(`  State: ${softwareUpdate.state}`);
    console.log(`  Checking for update: ${softwareUpdate.checkingEnabled}`);
    console.log(`  Bridge updates: ${softwareUpdate.bridge}`);

    if (softwareUpdate.lights.length) {
      console.log('  Lights: ' + softwareUpdate.lights.join(', '));
    } else {
      console.log('  Lights: false');
    }

    if (softwareUpdate.sensors.length) {
      console.log('  Sensors: ' + softwareUpdate.sensors.join(', '));
    } else {
      console.log('  Sensors: false');
    }

    console.log(`  Release URL: ${softwareUpdate.releaseUrl}`);
    console.log(`  Release notes: ${softwareUpdate.releaseNotes}`);
    console.log(`  Notify after installation: ${softwareUpdate.installNotificationEnabled}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
