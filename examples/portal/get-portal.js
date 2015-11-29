#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving portal (${client.host})...`);

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
