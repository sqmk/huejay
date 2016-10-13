#!/usr/bin/env node

'use strict';

let huejay = require('../../lib/Huejay');
let client = require('../init-client');

console.log('Attempting to create user.');
console.log('Make sure link button on bridge is pressed.');
console.log('...');

let user = new client.users.User;

client.users.create(user)
  .then(user => {
    console.log(`New user created:`);
    console.log(`  Username: ${user.username}`);
    console.log(`  Device type: ${user.deviceType}`);
  })
  .catch(error => {
    if (error instanceof huejay.Error && error.type === 101) {
      return console.log(`Link button not pressed. Try again...`);
    }

    console.log(error.stack);
  });
