#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

// Get light
client.lights.getById(8)
  .then(light => {
    console.log('Light found...');

    let schedule = new client.schedules.Schedule;
    schedule.name        = 'Huejay test';
    schedule.description = 'Schedule test';
    schedule.localTime   = new client.schedules.AbsoluteTime('2016-10-12 04:31:01');
    schedule.status      = 'disabled';
    schedule.autoDelete  = false;

    console.log('Creating schedule with light...');

    return client.schedules.create(schedule, light, ['brightness']);
  })
  .then(schedule => {
    console.log(`Schedule created: ${schedule.id}`);

    console.log('Saving schedule');
    schedule.name = 'New name';

    return client.schedules.save(schedule);
  })
  .then(schedule => {
    console.log('Saved schedule');

    console.log('Retrieving schedule');

    return client.schedules.getById(schedule.id);
  })
  .then(schedule => {
    console.log(`Schedule [${schedule.id}]: ${schedule.name}`);

    return client.schedules.delete(schedule);
  })
  .then(() => {
    console.log(`Schedule deleted`);
  })
  .catch(error => {
    console.log(error.stack);
  });
