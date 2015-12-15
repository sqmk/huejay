#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating group...');

let group = new client.groups.Group;
group.name     = 'Office group';
group.type     = 'Room';
group.class    = 'Office';
group.lightIds = [4, 5];

client.groups.create(group)
  .then(group => {
    console.log(`New group [${group.id}]:`);
    console.log(`  Name: ${group.name}`);
    console.log(`  Type: ${group.type}`);
    console.log(`  Class: ${group.class}`);
    console.log('  Light Ids:', group.lightIds.join(', '));

    return group;
  })
  .then(group => {
    console.log('Deleting group');

    return client.groups.delete(group);
  })
  .catch(error => {
    console.log(error.stack);
  });
