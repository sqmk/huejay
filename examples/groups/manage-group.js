#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating group...');

let group = new client.groups.Group;
group.name     = 'Group name here';
group.lightIds = [1, 2];

client.groups.create(group)
  .then(group => {
    console.log(`New group [${group.id}]:`);
    console.log(`  Name: ${group.name}`);
    console.log('  Light Ids:', group.lightIds.join(', '));

    return group.id;
  })
  .then(groupId => {
    console.log(`Retrieving group ${groupId}`);

    return client.groups.getById(groupId);
  })
  .then(group => {
    console.log('Updating group and changing action');

    group.name           = 'New group name here';
    group.lightIds       = [3, 4, 5, 6];
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
