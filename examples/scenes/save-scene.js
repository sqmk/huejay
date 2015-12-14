#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Getting scene...');

client.scenes.getById('jflowFI1AtKps8d')
  .then(scene => {
    scene.setLightState(10, {
      brightness: 254,
      colorTemp: 300,
    });

    scene.setLightState(9, {
      brightness: 254,
      colorTemp: 250
    });

    return client.scenes.save(scene)
  })
  .then(scene => {
    console.log(`Scene saved...`);
  })
  .catch(error => {
    console.log(error.stack);
  });
