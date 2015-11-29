#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Testing authentication...');

client.bridge.isAuthenticated()
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
