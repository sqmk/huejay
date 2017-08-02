#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');

console.log('Discovering bridges...');

huejay.discover()
  .then(bridges => {
    if (!bridges.length) {
      console.log('- No bridges found');
      return;
    }

    for (let bridge of bridges) {
      console.log(`- Id: ${bridge.id}, IP: ${bridge.ip}`);
    }
  })
  .catch(error => {
    console.log(error.message);
  });
