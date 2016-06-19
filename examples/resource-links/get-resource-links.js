#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving resource links...');
console.log();

client.resourceLinks.getAll()
  .then(resourceLinks => {
    for (let resourceLink of resourceLinks) {
      console.log(`Resource Link [${resourceLink.id}]:`, resourceLink.name);
      console.log(`  Description: ${resourceLink.description}`);
      console.log(`  Type: ${resourceLink.type}`);
      console.log(`  Class Id: ${resourceLink.classId}`);
      console.log(`  Owner: ${resourceLink.owner}`);
      console.log(`  Recycle: ${resourceLink.recycle}`);
      console.log(`  Links: ${resourceLink.links}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
