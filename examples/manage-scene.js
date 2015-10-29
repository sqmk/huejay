#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log('Creating scene and retrieving light...');

let scene = new huejay.Scene('huejay-test');
scene.name = 'Huejay test';
scene.lights = [8, 9, 10];
scene.transitionTime = 2;

Promise.all([
  client.createScene(scene),
  client.getLight(8)
])
  .then(results => {
    console.log('Scene created...');
    console.log('Light found...');

    let scene = results[0];
    let light = results[1];

    console.log('Saving scene light state...');

    return client.saveSceneLightState(scene, light, ['brightness']);
  })
  .then(() => {
    console.log('Light state saved on scene...');
  })
  .catch(error => {
    console.log(error.stack);
  });
