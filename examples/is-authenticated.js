#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log('Testing authentication...');

client.isAuthenticated()
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
