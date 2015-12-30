#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Incrementing group hue/saturation levels...`);

client.groups.getById(0)
  .then(group => {
    console.log(`Saving group...`);

    group.incrementHue        = 6500;
    group.incrementSaturation = 25;
    group.transitionTime      = 0.3;

    return client.groups.save(group);
  })
  .then(group => {
    console.log('New hue:', group.hue);
    console.log('New saturation:', group.saturation);
  })
  .catch(error => {
    console.log(error.stack);
  });
