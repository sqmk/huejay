#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving new lights...');
console.log();

client.getNewLights()
  .then(lights => {
    for (let light of lights) {
      console.log(light);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
