#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Incrementing light hue/saturation levels...`);

client.lights.getById(3)
  .then(light => {
    console.log(`Saving light...`);

    light.incrementHue        = 6500;
    light.incrementSaturation = 25;
    light.transitionTime      = 5;

    return client.lights.save(light);
  })
  .then(light => {
    console.log('New hue:', light.hue);
    console.log('New saturation:', light.saturation);
  })
  .catch(error => {
    console.log(error.stack);
  });
