<p align="center">
  <img src="https://cdn.rawgit.com/sqmk/huejay/8ca17db521eab6dbcfeabf93483f2700d7aa44bb/media/logo.svg" alt="Huejay" />
</p>

# Huejay - Philips Hue client for Node.js

[![NPM Version](https://badge.fury.io/js/huejay.svg)](https://www.npmjs.com/package/huejay)
[![Build Status](https://api.travis-ci.org/sqmk/huejay.svg?branch=master)](https://travis-ci.org/sqmk/huejay)

Huejay is a client for the Philips Hue home lighting system.

Use Huejay to interact with Philips Hue in the following ways:
* Bridge discovery
* Manage bridge settings
* Manage portal settings
* Manage software updates
* Manage users
* Manage lights
* Manage groups
* Manage schedules
* Manage scenes
* Manage sensors
* Retrieving and deleting rules

## Installation

Huejay was written for **Node.js 4+**.

`npm install --save huejay`

## Basic Usage

Huejay will be a fairly extensive library within the next few days.

Requiring the library is simple:

```js
let huejay = require('huejay');
```

Most methods return a **Promise** as a result.

### Bridge Discovery

Before interacting with your Hue system, you may want to know the availability
and IP addresses of your bridges. You can use Huejay's **discover** method to find
them.

```js
huejay.discover()
  .then(bridges => {
    for (let bridge of bridges) {
      console.log(`Id: ${bridge.id}, IP: ${bridge.ip}`);
    }
  })
  .catch(error => {
    console.log(`An error occurred: ${error.message}`);
  });
```

Huejay offers several strategies for bridge discovery:
* **nupnp**: Default option, uses Meethue's public API to discover local bridges
* **upnp**: Uses SSDP to discover local bridges
* **all**: Uses all available strategies for discovery

To use a specific discovery strategy:

```js
huejay.discover({strategy: 'upnp'})
  .then(bridges => {
    console.log(bridges);
  });
```

## Examples

Want to see more examples? View them in the [examples](examples) directory included
in this repository.

## License

This software is licensed under the MIT License. [View the license](LICENSE).

Copyright © 2015 [Michael K. Squires](http://sqmk.com)
