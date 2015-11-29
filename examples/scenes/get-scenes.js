#!/usr/bin/env node

'use strict';

let client = require('../init-client');

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
