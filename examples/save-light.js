#!/usr/bin/env node

'use strict';

let client = require('./init-client');

console.log(`Retrieving light from (${credentials.host})...`);

client.lights.getAll()
  .then(lights => {
    let light = lights[4];

    light.name = `Name test`;
    light.on   = true;

    console.log(`Saving light...`);

    return client.lights.save(light);
  })
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
