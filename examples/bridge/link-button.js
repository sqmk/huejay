#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Simulating link button press...`);

client.bridge.linkButton()
  .then(() => console.log('Done...'))
  .catch(error => console.log(error.stack));
