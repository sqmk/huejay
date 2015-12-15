#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving bridge (${client.host})...`);

client.bridge.get()
  .then(bridge => {

    bridge.touchLinkEnabled  = true;

    console.log(`Starting lamp stealer...`);

    return client.bridge.save(bridge);
  })
  .then(bridge => {
    console.log(`Lamp stealer started...`);
  })
  .catch(error => {
    console.log(error.stack);
  });
