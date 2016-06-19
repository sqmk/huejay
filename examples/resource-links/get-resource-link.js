#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving resource link...');
console.log();

client.resourceLinks.getById(1)
  .then(resourceLink => {
    console.log(`Resource Link [${resourceLink.id}]: ${resourceLink.name}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
