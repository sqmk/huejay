#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host);

console.log(`Retrieving bridge (${credentials.host})...`);

client.getBridge()
  .then(bridge => {
    console.log(`Name: ${bridge.name}`);
    console.log(`Bridge Id: ${bridge.bridgeId}`);
    console.log(`Model Id: ${bridge.modelId}`);
    console.log(`Software Version: ${bridge.softwareVersion}`);
    console.log(`API Version: ${bridge.apiVersion}`);
    console.log(`MAC Address: ${bridge.macAddress}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
