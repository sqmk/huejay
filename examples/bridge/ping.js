#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Pinging bridge...');

client.bridge.ping()
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
