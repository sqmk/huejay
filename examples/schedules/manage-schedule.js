#!/usr/bin/env node

'use strict';

let client = require('../init-client');

// Get light
client.lights.getById(1)
  .then(light => {
    console.log('Light found...');

    light.brightness = 1;

    let schedule = new client.schedules.Schedule;
    schedule.name        = 'Huejay test';
    schedule.description = 'Setting light brightness to 1 in 10 seconds';
    schedule.localTime   = new client.timePatterns.Timer(10);
    schedule.autoDelete  = true;
    schedule.action      = new client.actions.ChangeLightState(light, ['brightness']);

    console.log('Creating schedule with light...');

    return client.schedules.create(schedule);
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
