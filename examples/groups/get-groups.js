#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving groups...');
console.log();

client.groups.getAll()
  .then(groups => {
    for (let group of groups) {
      console.log(`Group [${group.id}]: ${group.name}`);
      console.log(`  Type: ${group.type}`);
      console.log('  Lights: ' + group.lights.join(', '));
      console.log('  State:');
      console.log(`    On:         ${group.on}`);
      console.log(`    Brightness: ${group.brightness}`);
      console.log(`    Color mode: ${group.colorMode}`);
      console.log(`    Hue:        ${group.hue}`);
      console.log(`    Saturation: ${group.saturation}`);
      console.log(`    X/Y:        ${group.xy[0]}, ${group.xy[1]}`);
      console.log(`    Color Temp: ${group.colorTemp}`);
      console.log(`    Alert:      ${group.alert}`);
      console.log(`    Effect:     ${group.effect}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
