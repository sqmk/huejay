#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log(`Retrieving portal (${credentials.host})...`);

client.getPortal()
  .then(portal => {
    console.log(`Portal:`);
    console.log(`  Is signed on: ${portal.isSignedOn()}`);
    console.log(`  Incoming: ${portal.isIncoming()}`);
    console.log(`  Outgoing: ${portal.isOutgoing()}`);
    console.log(`  Communication: ${portal.communication}`);
    console.log();
  })
  .catch(error => {
    console.log(error.stack);
  });
