#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving scenes...');
console.log();

client.scenes.getAll()
  .then(scenes => {
    for (let scene of scenes) {
      console.log(`Scene [${scene.id}]: ${scene.name}`);
      console.log('  Lights: ' + scene.lights.join(', '));
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
