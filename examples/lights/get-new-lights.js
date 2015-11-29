#!/usr/bin/env node

'use strict';

let client = require('./init-client');

console.log('Retrieving new lights...');
console.log();

client.lights.getNew()
  .then(lights => {
    for (let light of lights) {
      console.log(light);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
