#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Recalling scene...');

client.scenes.recall('34df1eb80-on-0')
  .then(() => {
    console.log('Scene recalled...');
  })
  .catch(error => {
    console.log(error.stack);
  });
