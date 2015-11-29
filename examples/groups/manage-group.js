#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating group...');

let group = new client.groups.Group;
group.name = 'Group name here';
group.lights = [8, 9];

client.groups.create(group)
  .then(group => {
    console.log(`New group [${group.id}]:`);
    console.log(`  Name: ${group.name}`);
    console.log('  Lights: ' + group.lights.join(', '));

    return group.id;
  })
  .then(groupId => {
    console.log(`Retrieving group ${groupId}`);

    return client.groups.getById(groupId);
  })
  .then(group => {
    console.log('Updating group and changing state');

    group.name           = 'New group name here';
    group.lights         = [8, 9, 10, 11];
    group.on             = true;
    group.brightness     = 254;
    group.transitionTime = 0;

    return client.groups.save(group);
  })
  .then(group => {
    console.log('Deleting group');

    return client.groups.delete(group);
  })
  .catch(error => {
    console.log(error.stack);
  });
