#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log(`Retrieving bridge (${credentials.host})...`);

client.getBridge()
  .then(bridge => {
    bridge.name              = `Huejay test ${(new Date()).getSeconds()}`;
    bridge.timeZone          = 'America/Detroit';
    bridge.zigbeeChannel     = 20;
    bridge.dhcpEnabled       = true;
    bridge.touchLinkEnabled  = true;
    bridge.linkButtonEnabled = true;

    console.log(`Saving bridge configuration...`);

    return client.saveBridge(bridge);
  })
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });
