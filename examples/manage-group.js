#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Creating group...');

let group = new huejay.Group;
group.name = 'Group name here';
group.lights = [8, 9];

client.createGroup(group)
  .then(group => {
    console.log(`New group [${group.id}]:`);
    console.log(`  Name: ${group.name}`);
    console.log('  Lights: ' + group.lights.join(', '));

    return group.id;
  })
  .then(groupId => {
    console.log(`Retrieving group ${groupId}`);

    return client.getGroup(groupId);
  })
  .then(group => {
    console.log('Updating group and changing state');

    group.name           = 'New group name here';
    group.lights         = [8, 9, 10, 11];
    group.on             = true;
    group.brightness     = 254;
    group.transitionTime = 0;

    return client.saveGroup(group);
  })
  .then(group => {
    console.log('Deleting group');

    return client.deleteGroup(group);
  })
  .catch(error => {
    console.log(error.stack);
  });
