#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log(`Retrieving software update details (${credentials.host})...`);

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
