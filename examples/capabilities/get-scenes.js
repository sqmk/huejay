#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving scene capabilities...');

client.capabilities.scenes()
  .then(scenes => {
    console.log('Scenes:');
    console.log(`  Available: ${scenes.available}`);
    console.log(`  Light States Available: ${scenes.lightStatesAvailable}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
