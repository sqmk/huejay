#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving schedules...');
console.log();

client.getSchedules()
  .then(schedules => {
    for (let schedule of schedules) {
      console.log(schedule);
      console.log(`Schedule [${schedule.id}]: ${schedule.name}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
