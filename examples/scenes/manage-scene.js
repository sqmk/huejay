#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating scene...');

let scene = new client.scenes.Scene;
scene.name           = 'Huejay test';
scene.lightIds       = [8, 9, 10];
scene.recycle        = false;
scene.transitionTime = 2;
scene.appData        = {version: 1, data: "custom data"};

client.scenes.create(scene)
  .then(scene => {
    console.log(`Scene [${scene.id}] created...`);

    scene.name = 'New scene name';

    return client.scenes.save(scene);
  })
  .then(scene => {
    console.log(`Scene saved...`);

    return client.scenes.delete(scene);
  })
  .then(() => {
    console.log('Scene deleted...');
  })
  .catch(error => {
    console.log(error.stack);
  });
