#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Deleting user...');

client.users.delete('usernamehere')
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
