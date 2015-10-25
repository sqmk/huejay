#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials.host, credentials.username);

console.log('Retrieving users...');
console.log();

client.getUsers()
  .then(users => {
    for (let user of users) {
      console.log(` Username: ${user.username}`);
      console.log(` Device type: ${user.deviceType}`);
      console.log(` Create date: ${user.createDate}`);
      console.log(` Last use date: ${user.lastUseDate}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
