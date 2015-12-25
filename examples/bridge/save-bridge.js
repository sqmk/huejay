#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving bridge (${client.host})...`);

client.bridge.get()
  .then(bridge => {
    bridge.name              = `Huejay test ${(new Date()).getSeconds()}`;
    bridge.timeZone          = 'America/Detroit';
    bridge.zigbeeChannel     = 20;
    bridge.dhcpEnabled       = true;
    bridge.touchlinkEnabled  = true;
    bridge.linkButtonEnabled = true;

    console.log(`Saving bridge configuration...`);

    return client.bridge.save(bridge);
  })
  .then(bridge => {
    console.log(`Bridge "${bridge.name}" saved...`);
  })
  .catch(error => {
    console.log(error.stack);
  });
