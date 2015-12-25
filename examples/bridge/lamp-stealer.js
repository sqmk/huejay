#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Starting lamp stealer...`);

client.bridge.touchlink()
  .then(() => console.log('Touchlink enabled...'))
  .catch(error => console.log(error.stack));
