#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Attempting to create user.');
console.log('Make sure link button on bridge is pressed.');
console.log('...');

client.users.create()
  .then(username => {
    console.log(`New username created: ${username}`);
  })
  .catch(error => {
    if (error instanceof huejay.Error && error.type === 101) {
      return console.log(`Link button not pressed. Try again...`);
    }

    console.log(error.stack);
  });
