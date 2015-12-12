#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving scenes...');
console.log();

client.scenes.getAll()
  .then(scenes => {
    for (let scene of scenes) {
      console.log(`Scene [${scene.id}]:`, scene.name);
      console.log('  Lights:', scene.lightIds.join(', '));
      console.log('  Owner:', scene.owner);
      console.log('  Recycle:', scene.recycle);
      console.log('  Locked:', scene.locked);
      console.log('  App data:', scene.appData);
      console.log('  Picture:', scene.picture);
      console.log('  Last Updated:', scene.lastUpdated);
      console.log('  Version:', scene.version);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
