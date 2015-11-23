#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Deleting user...');

client.users.delete('usernamehere')
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
