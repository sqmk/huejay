#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Retrieving light...');
console.log();

client.lights.getById(8)
  .then(light => {
    console.log(`Light [${light.id}]: ${light.name}`);
    console.log(`  Type:             ${light.type}`);
    console.log(`  Unique ID:        ${light.uniqueId}`);
    console.log(`  Manufacturer:     ${light.manufacturer}`);
    console.log(`  Model Id:         ${light.modelId}`);
    console.log(`  Software Version: ${light.softwareVersion}`);
    console.log('  State:');
    console.log(`    On:         ${light.on}`);
    console.log(`    Reachable:  ${light.reachable}`);
    console.log(`    Brightness: ${light.brightness}`);
    console.log(`    Color mode: ${light.colorMode}`);
    console.log(`    Hue:        ${light.hue}`);
    console.log(`    Saturation: ${light.saturation}`);
    console.log(`    X/Y:        ${light.xy[0]}, ${light.xy[1]}`);
    console.log(`    Color Temp: ${light.colorTemp}`);
    console.log(`    Alert:      ${light.alert}`);
    console.log(`    Effect:     ${light.effect}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
