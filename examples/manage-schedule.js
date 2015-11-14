#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

// Get light
client.getLight(8)
  .then(light => {
    console.log('Light found...');

    let schedule = new huejay.Schedule;
    schedule.name        = 'Huejay test';
    schedule.description = 'Schedule test';
    schedule.localTime   = new huejay.Schedule.AbsoluteTime('2016-10-12 04:31:01');
    schedule.status      = 'disabled';
    schedule.autoDelete  = false;

    console.log('Creating schedule with light...');

    return client.createSchedule(schedule, light, ['brightness']);
  })
  .then(schedule => {
    console.log(`Schedule created: ${schedule.id}`);

    console.log('Saving schedule');
    schedule.name = 'New name';

    return client.saveSchedule(schedule);
  })
  .then(schedule => {
    console.log('Saved schedule');

    console.log('Retrieving schedule');

    return client.getSchedule(schedule.id);
  })
  .then(schedule => {
    console.log(`Schedule [${schedule.id}]: ${schedule.name}`);

    return client.deleteSchedule(schedule);
  })
  .then(() => {
    console.log(`Schedule deleted`);
  })
  .catch(error => {
    console.log(error.stack);
  });
