#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving light from (${client.host})...`);

client.lights.getAll()
  .then(lights => {
    let light = lights[4];

    light.name = `Name test`;
    light.on   = true;

    console.log(`Saving light...`);

    return client.lights.save(light);
  })
  .then(light => {
    console.log(`Saved light [${light.id}]`);
  })
  .catch(error => {
    console.log(error.stack);
  });
