#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving supported time zones...');

client.timeZones.getAll()
  .then(timeZones => {
    console.log('Time Zones:');
    for (let tz of timeZones) {
      console.log(`  ${tz}`);
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
