#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Starting light scan...');

client.lights.scan()
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
