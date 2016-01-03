#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving schedules...');
console.log();

client.schedules.getAll()
  .then(schedules => {
    for (let schedule of schedules) {
      console.log(`Schedule [${schedule.id}]: ${schedule.name}`);
      console.log(`  Description: ${schedule.description}`);
      console.log(`  Created: ${schedule.created}`);
      console.log(`  Local time: ${schedule.localTime}`);
      console.log(`  Status: ${schedule.status}`);
      console.log(`  Auto delete: ${Boolean(schedule.autoDelete)}`);
      console.log(`  Command:`);
      console.log(`    Method: ${schedule.action.method}`);
      console.log(`    Address: ${schedule.action.address}`);
      console.log(`    Body: ${JSON.stringify(schedule.action.body)}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
