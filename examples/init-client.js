#!/usr/bin/env node

'use strict';

let huejay      = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

module.exports = client;
