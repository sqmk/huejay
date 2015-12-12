#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving users...');
console.log();

client.users.getAll()
  .then(users => {
    for (let user of users) {
      console.log(` Username: ${user.username}`);
      console.log(` Device type: ${user.deviceType}`);
      console.log(` Create date: ${user.created}`);
      console.log(` Last use date: ${user.lastUsed}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
