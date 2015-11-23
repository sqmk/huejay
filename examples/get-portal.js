#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log(`Retrieving portal (${credentials.host})...`);

client.portal.get()
  .then(portal => {
    console.log(`Portal:`);
    console.log(`  Is signed on: ${portal.signedOn}`);
    console.log(`  Incoming: ${portal.incoming}`);
    console.log(`  Outgoing: ${portal.outgoing}`);
    console.log(`  Communication: ${portal.communication}`);
    console.log();
  })
  .catch(error => {
    console.log(error.stack);
  });
