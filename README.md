<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/sqmk/huejay@db9081ee1a22acf77abc93cbd3f2e8f6d20ee16b/media/huejay.svg" alt="Huejay" />
</p>

# Huejay - Philips Hue client for Node.js

[![NPM Version](https://img.shields.io/npm/v/huejay.svg)](https://www.npmjs.com/package/huejay)
[![Build Status](https://img.shields.io/travis/sqmk/huejay/master.svg)](https://travis-ci.org/sqmk/huejay)
[![Dependency Status](https://img.shields.io/david/sqmk/huejay.svg)](https://david-dm.org/sqmk/huejay)
[![Greenkeeper badge](https://badges.greenkeeper.io/sqmk/huejay.svg)](https://greenkeeper.io/)

Huejay is the most in-depth Node.js client for the Philips Hue home lighting system.

Use Huejay to interact with Philips Hue in the following ways:
- [Discover bridges](#bridge-discovery)
- [Manage bridge settings](#bridge)
- [Manage portal settings](#portal)
- [Manage software updates](#software-update)
- [Manage users](#users)
- [Manage lights](#lights)
- [Manage groups](#groups)
- [Manage schedules](#schedules)
- [Manage scenes](#scenes)
- [Manage sensors](#sensors)
- [Manage rules](#rules)
- [Manage resource links](#resource-links)
- [Retrieve capabilities](#capabilities)
- [Retrieve internet services](#internet-services)

Philips Hue API version supported: **1.19.0**

## Documentation

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Bridge Discovery](#bridge-discovery)
- [Errors](#errors)
- [Client Usage](#client-usage)
  - [Remote API](#using-the-remote-api)
  - [Users](#users)
  - [Bridge](#bridge)
  - [Portal](#portal)
  - [Software Update](#software-update)
  - [Internet Services](#internet-services)
  - [Lights](#lights)
  - [Groups](#groups)
  - [Schedules](#schedules)
    - [Time Patterns](#time-patterns)
    - [Actions](#actions)
  - [Scenes](#scenes)
  - [Sensors](#sensors)
  - [Rules](#rules)
  - [Resource Links](#resource-links)
  - [Capabilities](#capabilities)
  - [Time Zones](#time-zones)

## Installation

Huejay was written for **Node.js 4+**.

`npm install --save huejay`

## Basic Usage

Requiring the library is simple:

```js
let huejay = require('huejay');
```

Most methods return a `Promise` as a result. These are native Node.js promises.

## Bridge Discovery

Before interacting with your Hue system, you may want to know the availability
and IP addresses of your bridges. You can use Huejay's `discover` method to find
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

## Errors

Nearly all errors returned by Huejay are of type `huejay.Error`. Use this to
check Huejay specific errors.

Errors originating from the bridge return an additional `type` property.
This value is the error number as returned by the Philips Hue API.

## Client Usage

You can use Huejay to retrieve and manipulate resources on your preferred bridge.
Resources include users, lights, groups, scenes, and others.

To start, you must instantiate a client. The `Client` class is available for
convenience via Huejay;

```js
let client = new huejay.Client({
  host:     '123.0.12.34',
  port:     80,               // Optional
  username: 'bridgeusername', // Optional
  timeout:  15000,            // Optional, timeout in milliseconds (15000 is the default)
});
```

If a *username* is not provided, nearly all commands will fail due to failure to
authenticate with the bridge. Be sure to provide a valid *username* to use all
client commands.

The *timeout* option applies to bridge commands. The default value is 15000
milliseconds (or 15 seconds).

### Using the Remote API

Philips provides a hosted API with an identical interface to that of the local bridge API.  Using the Remote API allows for bridges and the devices controlling them to be on seperate networks.

To use it, an OAuth token must be generated first.

After [adding a new Remote Hue API app](https://developers.meethue.com/my-apps/), open

`https://api.meethue.com/oauth2/auth?clientid=<client-id>&appid=<app-id>&deviceid=<device-id>&devicename=<device-name>&state=<state>&response_type=code`

in your browser to generate an authentication code.

Parameters:

| Parameter   | Meaning                                                    |
|-------------|------------------------------------------------------------|
| client-id   | Your app's client ID                                       |
| app-id      | Your app ID                                                |
| device-id   | Anything you want                                          |
| device-name | Your app's name                                            |
| state       | Anything you want, will be passed back in the redirect URL |

Once a code has been generated, run

```javascript
const huejay = require('huejay');

(async () => {
  const token = new huejay.OAuthToken({
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret'
  });

  await token.getByCode('your-auth-code');

  console.log(JSON.stringify(token)) // => your OAuth token
})();
```

to generate an OAuth token.

You can then use the OAuth token in future requests like so:

```javascript
const huejay = require('huejay');

(async () => {
  const token = new huejay.OAuthToken({
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret',
    accessToken: 'your-access-token',
    refreshToken: 'your-refresh-token'
  });

  const client = new huejay.Client({
    remote: true,
    oauthToken: token,
    username: 'your-bridge-username'
  });

  // Refresh the access token
  await token.refresh();

  // Turn light `1` on
  const light = await client.lights.getById(1);

  light.on = true;

  await client.lights.save(light);
})();
```

### Users

Huejay provides several commands for managing users on Philips Hue bridges.

#### client.users.create - Create user

You can use Huejay to create users on the bridge. Creating a user requires the
bridge's link button to be pressed. The link button is activated for roughly
30 seconds.

To create a user, instantiate a `User` object and pass it to `client.users.create`.
On successful creation, a brand new `User` object is returned by way of a `Promise`.
The `User` object will contain a username generated by the bridge. You can use
this username to authenticate against the bridge going forward.

```js
let user = new client.users.User;

// Optionally configure a device type / agent on the user
user.deviceType = 'my_device_type'; // Default is 'huejay'

client.users.create(user)
  .then(user => {
    console.log(`New user created - Username: ${user.username}`);
  })
  .catch(error => {
    if (error instanceof huejay.Error && error.type === 101) {
      return console.log(`Link button not pressed. Try again...`);
    }

    console.log(error.stack);
  });
```

*Note: The bridge does not permit supplying your own username.*

*Note: It is possible to use Huejay to toggle the link button if you are already
authenticated with the bridge. This may save you from walking over to the bridge
to physically press the link button. See `client.bridge.save` and `Bridge`
`linkButtonEnabled`.*

#### client.users.get - Get authenticated user

If the username assigned to the client is legitimate, you can get the details for
this user by calling `client.users.get`.

```js
client.users.get()
  .then(user => {
    console.log('Username:', user.username);
    console.log('Device type:', user.deviceType);
    console.log('Create date:', user.created);
    console.log('Last use date:', user.lastUsed);
  });
```

#### client.users.getByUsername - Get user by username

Although the bridge does not provide an equivalent API for retrieving a user
by username, Huejay provides a means to do so.

Simply pass in a string containing username to `client.users.getByUsername` to
look up the user.

```js
client.users.getByUsername('usernamehere')
  .then(user => {
    console.log(`Username: ${user.username}`);
  });
  .catch(error => {
    console.log(error.stack);
  });
```

If a user is not found with the provided username, a `huejay.Error` is thrown.

#### client.users.getAll - Get all users

Want to retrieve all users assigned to the bridge? You can use
`client.users.getAll` to do so. This method will return an array of `User`
objects.

```js
client.users.getAll()
  .then(users => {
    for (let user of users) {
      console.log(`Username: ${user.username}`);
    }
  });
```

#### client.users.delete - Delete a user

Deleting users using Huejay is simple. Provide either a username or `User`
object to `client.users.delete` to delete a user.

```js
client.users.delete('usernamehere')
  .then(() => {
    console.log('User was deleted');
  })
  .catch(error => {
    console.log(error.stack);
  });
```

### Bridge

Huejay supports retrieving and configuring the Philips Hue bridge. It supports
testing connection and authentication to the bridge as well.

#### client.bridge.ping - Test connection to the bridge

Use `client.bridge.ping` to test connection to your preferred bridge. Failed
connection results in a thrown `huejay.Error`.

```js
client.bridge.ping()
  .then(() => {
    console.log('Successful connection');
  })
  .catch(error => {
    console.log('Could not connect');
  });
```

#### client.bridge.isAuthenticated - Test authentication to the bridge

To ensure your supplied client username can authenticate to the bridge, use
`client.bridge.isAuthenticated`. Authentication or connection failure will
result `huejay.Error` being thrown.

```js
client.bridge.isAuthenticated()
  .then(() => {
    console.log('Successful authentication');
  })
  .catch(error => {
    console.log('Could not authenticate');
  });
```

#### client.bridge.get - Get bridge details and configuration

Want to get bridge details? Use Huejay's `client.bridge.get`
method. This will return a `Bridge` object, which can be used for reading
and saving configuration.

```js
client.bridge.get()
  .then(bridge => {
    console.log(`Retrieved bridge ${bridge.name}`);
    console.log('  Id:', bridge.id);
    console.log('  Model Id:', bridge.modelId);
    console.log('  Model Name:', bridge.model.name);
  });
```

Attributes available on the `Bridge` object:
- `id` - Unique
- `name` - Name of the bridge
- `modelId` - Model Id
- `model` - A `BridgeModel` object, containing details about the model
- `factoryNew` - Whether or not the bridge is factory new
- `replacesBridgeId` - Replaces bridge id (for migrating from old bridges)
- `dataStoreVersion` - Data store version
- `starterKitId` - Name of the starterkit created in the factory
- `softwareVersion` - Software version of the bridge
- `apiVersion` - API version of the bridge
- `zigbeeChannel` - ZigBee channel (for communicating with lights)
- `macAddress` - MAC address
- `ipAddress` - IP address
- `dhcpEnabled` - Whether or not DHCP is enabled
- `netmask` - Netmask
- `gateway` - Gateway
- `proxyAddress` - Proxy address
- `proxyPort` - Proxy port
- `utcTime` - UTC time of the bridge
- `timeZone` - Time zone
- `localTime` - Local time of the bridge
- `portalServicesEnabled` - Whether or not portal services are enabled
- `portalConnected` - Whether or not portal is connected
- `linkButtonEnabled` - Whether or not link button is enabled
- `touchlinkEnabled` - Whether or not Touchlink is enabled

The `Bridge` `model` attribute returns a `BridgeModel` object which contains
additional details about the model:
- `id` - Model Id, typically the same value as `Bridge` `modelId`
- `manufacturer` - Manufacturer (e.g. Philips)
- `name` - Name of the model / product (e.g. Hue v1, Hue v2)

#### client.bridge.save - Save bridge configuration

You can configure the bridge by changing values on the `Bridge` object and
passing to the `client.bridge.save` method. This method will return the same
`Bridge` for further manipulation.

```js
client.bridge.get()
  .then(bridge => {
    // Change bridge's name
    bridge.name = 'New bridge name';

    return client.bridge.save(bridge);
  })
  .then(bridge => {
    console.log(`Bridge is now named ${bridge.name}`);
  });
```

The following `Bridge` attributes are configurable:
- `name` - Name of the bridge
- `zigbeeChannel` - Preferred ZigBee channel
- `ipAddress` - IP address
- `dhcpEnabled` - `true` to enable, `false` to disable
- `netmask` - Netmask
- `gateway` - Gateway
- `proxyPort` - Proxy port
- `proxyAddress` - Proxy address
- `timeZone` - Any value available in `client.timeZones.getAll`
- `linkButtonEnabled` - `true` to toggle on temporarily
- `touchlinkEnabled` - `true` to toggle on temporarily

#### client.bridge.linkButton - Simulate link button press

Use this command with an authenticated user to simulate pressing the link
button. No need to physically press the button on your bridge for creating users
and other actions.

```js
client.bridge.linkButton()
  .then(() => {
    console.log('Link button was pressed');
  });
```

#### client.bridge.touchlink - Enable Touchlink

Having issues pairing new lights to your bridge? Reset your bridge and can't
seem to find your existing lights? Use Huejay to enable Touchlink and steal
those lights back. This is commonly known in the community as "Lamp stealer".

Touchlink is enabled for roughly 30 seconds.

```js
client.bridge.touchlink()
  .then(() => {
    console.log('Touchlink is enabled');
  });
```

You can set `touchlinkEnabled` on the `Bridge` object and save to achieve
the same effect as this command.

### Portal

The Philips Hue bridge allows connection to Philips' Meethue.com portal
services. You can use Meethue.com to remotely configure numerous resources
on your bridge, including lights, devices, and scenes.

Huejay provides a way to retrieve Meethue's portal connectivity details.

#### client.portal.get - Get portal details

Use `client.portal.get` to retrieve connectivity details. This method will
return a `Portal` object.

```js
client.portal.get()
  .then(portal => {
    console.log('Is signed on:', portal.signedOn);
    console.log('Incoming:', portal.incoming);
    console.log('Outgoing:', portal.outgoing);
    console.log('Communication:', portal.communication);
  });
```

### Software Update

Occasionally, Philips releases new updates for the bridge, lights, and devices.
You can use Huejay to facilitate downloading and installation of updates.

#### client.softwareUpdate.get - Get software update details

To get software update details, use the `client.softwareUpdate.get` method to
retrieve a `SoftwareUpdate` object. This object provides details about any
pending updates to the bridge or other resources.

```js
client.softwareUpdate.get()
  .then(softwareUpdate => {
    console.log('State:', softwareUpdate.state);
    console.log('Release URL:', softwareUpdate.releaseUrl);
    console.log('Release notes:', softwareUpdate.releaseNotes);
  });
```

The following attributes are available on the `SoftwareUpdate` object:
- `state` - Update state, see below for values
- `checkingEnabled` - `true` if bridge is checking for updates, `false` if not
- `bridge` - `true` if updates are available for the bridge, `false` if not
- `lights` - An array of light ids with available updates
- `sensors` - An array of sensor ids with available updates
- `releaseUrl` - Release URL
- `releaseNotes` - Release notes
- `installNotificationEnabled` - Whether or not the install notification is enabled

The following are possible `state` values:
- `NO_UPDATE` - There are no updates available
- `DOWNLOADING` - Updates are being downloaded
- `READY_TO_INSTALL` - Updates are ready to be installed
- `INSTALLING` - Updates are installing

#### client.softwareUpdate.check - Make bridge check for software updates

You can request the bridge to check for software updates. Call the
`client.softwareUpdate.check` method to have the bridge start checking for
updates. A `huejay.Error` is thrown if the bridge is already checking.

```js
client.softwareUpdate.check()
  .then(() => {
    console.log('Bridge is checking for software updates');
  });
```

#### client.softwareUpdate.install - Start installation of pending updates

If there are any pending software updates, you can use `client.softwareUpdate.install`
to install them. A `huejay.Error` is thrown if there are no updates to install.

```js
client.softwareUpdate.install()
  .then(() => {
    console.log('Installation has begun');
  });
```

#### client.softwareUpdate.disableInstallNotification - Disables install notification

To disable the install notification (useful for mobile apps),
`client.softwareUpdate.disableInstallNotification` will allow you to turn off the
notification. This only works when the notification is enabled.

```js
client.softwareUpdate.disableInstallNotification()
  .then(() => {
    console.log('Install notification is now disabled');
  });
```

### Internet Services

Interested in finding out what internet services are connected and functioning on your bridge?

#### client.internetServices.get - Get internet services details

Use this command for retrieving information about what internet services are connected.

```js
client.internetServices.get()
  .then(internetServices => {
    console.log(`Internet: ${internetServices.internetConnected}`);
    console.log(`Remote access: ${internetServices.remoteAccessConnected}`);
    console.log(`Time sync: ${internetServices.timeSyncConnected}`);
    console.log(`Software update: ${internetServices.softwareUpdateConnected}`);
  })
  .catch(error => {
    console.log(error.stack);
  });

```

### Lights

The Philips Hue API exposes numerous endpoints for managing your lights. Huejay
supports it all, from searching and installing new lights, to changing light
attributes and state.

#### client.lights.scan - Scan for new lights

Hooked up a fresh Philips Hue bridge? Plugged in brand new bulbs or a fixture?
Before you can interact with your new lights, you'll need to add them to your
preferred bridge.

Huejay's `client.lights.scan` will get your bridge to start scanning for new,
unregistered lights. Scans last roughly 30 seconds. New bulbs can then be
retrieved by using `client.lights.getNew`.

```js
client.lights.scan()
  .then(() => {
    console.log('Started new light scan');
  });
```

*Note: Make sure your bulbs are powered on for your bridge to find them.*

#### client.lights.getNew - Get new lights

When bulbs are freshly registered on the bridge, you can retrieve them using
`client.lights.getNew`. This command will ultimately return an array of `Light` objects.

```js
client.lights.getNew()
  .then(lights => {
    console.log('Found new lights:');
    for (let light of lights) {
      console.log(`Light [${light.id}]:`);
      console.log('  Unique Id:', light.uniqueId);
      console.log('  Model:',     light.model.name);
      console.log('  Reachable:', light.reachable);
    }
  });
```

More information on `Light` objects is available in the following commands below.

#### client.lights.getAll - Get all registered lights

Huejay's `client.lights.getAll` will return a list of all registered lights on
the bridge. Like `client.lights.getNew`, the result from the completed `Promise`
will be an array of `Light` objects.

```js
client.lights.getAll()
  .then(lights => {
    for (let light of lights) {
      console.log(`Light [${light.id}]: ${light.name}`);
      console.log(`  Type:             ${light.type}`);
      console.log(`  Unique ID:        ${light.uniqueId}`);
      console.log(`  Manufacturer:     ${light.manufacturer}`);
      console.log(`  Model Id:         ${light.modelId}`);
      console.log('  Model:');
      console.log(`    Id:             ${light.model.id}`);
      console.log(`    Manufacturer:   ${light.model.manufacturer}`);
      console.log(`    Name:           ${light.model.name}`);
      console.log(`    Type:           ${light.model.type}`);
      console.log(`    Color Gamut:    ${light.model.colorGamut}`);
      console.log(`    Friends of Hue: ${light.model.friendsOfHue}`);
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
      console.log();
    }
  });
```

The following `Light` attributes are available:
- `id` - Numerical id of the light as registered on the bridge
- `name` - Configurable name for the light
- `type` - Type of light (e.g. Extended Color Light, Dimmable Light)
- `uniqueId` - Unique Id of the light
- `manufacturer` - Name of the manufacturer
- `modelId` - Model Id of the light, used for determining `LightModel`
- `model` - A `LightModel` object, containing details about the model (not available in other Node.js clients!)
- `productId` - Unique identifying hardware model (*Note: Not available for all lights*)
- `softwareVersion` - Software version of the light
- `softwareConfigId` - Software config id of the light (*Note: Not available for all lights*)

The following `Light` state is available:
- `on` - `true` if the light is on, `false` if not, configurable
- `reachable` - `true` if the light can be communicated with, `false` if not
- `brightness` - Configurable brightness of the light (value from 0 to 254)
- `colorMode` - Color mode light is respecting (e.g. ct, xy, hs)
- `hue` - Configurable hue of the light (value from 0 to 65535)
- `saturation` - Configurable saturation of the light, compliments `hue` (value from 0 to 254)
- `xy` - Configurable CIE x and y coordinates (value is an array containing x and y values)
- `colorTemp` - Configurable Mired Color temperature of the light (value from 153 to 500)
- `transitionTime` - Configurable temporary value which eases transition of an effect (value in seconds, 0 for instant, 5 for five seconds)
- `alert` - Configurable alert effect (e.g. none, select, lselect)
- `effect` - Configurable effect (e.g. none, colorloop)

There are additional `Light` state properties available for incrementing and
decrementing values:
- `incrementBrightness` - Increment or decrement brightness value
- `incrementHue` - Increment or decrement hue value
- `incrementSaturation` - Increment or decrement saturation value
- `incrementXy` - Increment or decrement xy values
- `incrementColorTemp` - Increment or decrement color temperature value

Huejay is the only Node.js client that maintains a list of Philips Hue supported
models. The `Light` `model` attribute returns a `LightModel` object which contains
additional details about the model:
- `id` - Model Id, typically the same value as `Light` `modelId`
- `manufacturer` - Manufacturer, typically the same value as `Light` `manufacturer`
- `name` - Name of the model / product (e.g. Hue Spot GU10)
- `type` - Type of light, typically the same value as `Light` `type`
- `colorGamut` - The supported color gamut of the light
- `friendsOfHue` - `true` if Friends of Hue, `false` if not

#### client.lights.getById - Get light by id

If only a single light is needed, `client.lights.getById` can be used to fetch
a light by its bridge assigned id. A `Light` object is returned if the light is
found, else a `huejay.Error` is thrown.

```js
client.lights.getById(1)
  .then(light => {
    console.log('Found light:');
    console.log(`  Light [${light.id}]: ${light.name}`);
  })
  .catch(error => {
    console.log('Could not find light');
    console.log(error.stack);
  });
```

#### client.lights.save - Save a light's attributes and state

After retrieving a `Light` object through previous commands, you can configure
the light and save its attributes and state. This allows you to change a
light's name, color, effect, and so on. You can set various properties on a
`Light` object, and save them via `client.lights.save`.

Huejay is smart and keeps track of changed attributes and state. The client
will only send updated values to the Philips Hue bridge, as sending all
configurable attributes and state can affect bridge and light performance.

To save a light, pass a `Light` object to `client.lights.save`. The light is
returned after saving for convenient chaining.

```js
client.lights.getById(3)
  .then(light => {
    light.name = 'New light name';

    light.brightness = 254;
    light.hue        = 32554;
    light.saturation = 254;

    return client.lights.save(light);
  })
  .then(light => {
    console.log(`Updated light [${light.id}]`);
  })
  .catch(error => {
    console.log('Something went wrong');
    console.log(error.stack);
  });
```

The following `Light` object attributes and state are configurable:
- `name`
- `on`
- `brightness`
- `hue`
- `saturation`
- `xy`
- `colorTemp`
- `transitionTime`
- `alert`
- `effect`
- `incrementBrightness`
- `incrementHue`
- `incrementSaturation`
- `incrementXy`
- `incrementColorTemp`

*Note: See further above for details on `Light` attributes and state*

#### client.lights.delete - Delete a light

Remove a light from the bridge with `client.lights.delete`. This will accept
either an id or a `Light` object.

```js
client.lights.delete(4)
  .then(() => {
    console.log('Light was deleted');
  })
  .catch(error => {
    console.log('Light may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

### Groups

The Philips Hue bridge offers the convenience of grouping lights. Rather than
setting individual light brightness, color, and other options, you can apply the
same changes on a group and have it applied to all linked lights. Huejay
provides a complete interface for managing groups on the bridge.

Groups may also represent multisource luminaires. Philips offers several products
which consist of several color changing lights. Upon registering one of these
products with the bridge, a new group is created which represents the logical
grouping of the included lights. Huejay offers a simple means of retrieving
luminaire production information, as well as configuration of these high-end
fixtures.

#### client.groups.getAll - Get all groups

Use `client.groups.getAll` to retrieve all groups created on the bridge. This
command eventually returns an array of `Group` objects. See further below for
`Group` object information.

```js
client.groups.getAll()
  .then(groups => {
    for (let group of groups) {
      console.log(`Group [${group.id}]: ${group.name}`);
      console.log(`  Type: ${group.type}`);
      console.log(`  Class: ${group.class}`);
      console.log('  Light Ids: ' + group.lightIds.join(', '));
      console.log('  State:');
      console.log(`    Any on:     ${group.anyOn}`);
      console.log(`    All on:     ${group.allOn}`);
      console.log('  Action:');
      console.log(`    On:         ${group.on}`);
      console.log(`    Brightness: ${group.brightness}`);
      console.log(`    Color mode: ${group.colorMode}`);
      console.log(`    Hue:        ${group.hue}`);
      console.log(`    Saturation: ${group.saturation}`);
      console.log(`    X/Y:        ${group.xy[0]}, ${group.xy[1]}`);
      console.log(`    Color Temp: ${group.colorTemp}`);
      console.log(`    Alert:      ${group.alert}`);
      console.log(`    Effect:     ${group.effect}`);

      if (group.modelId !== undefined) {
        console.log(`  Model Id: ${group.modelId}`);
        console.log(`  Unique Id: ${group.uniqueId}`);
        console.log('  Model:');
        console.log(`    Id:           ${group.model.id}`);
        console.log(`    Manufacturer: ${group.model.manufacturer}`);
        console.log(`    Name:         ${group.model.name}`);
        console.log(`    Type:         ${group.model.type}`);
      }

      console.log();
    }
  });
```

As demonstrated in the example above, group attributes, state, and actions are available
via `Group` objects.

Here are the following attributes and state available on `Group`:
- `id` - Group Id, generated automatically by the bridge
- `name` - Configurable name for the group
- `type` - Configurable type of group (e.g. LightGroup, Luminaire, LightSource, Room)
- `class` - When `type` is set to `Room`, a class (see below) is available and configurable (e.g. Living room, Office)
- `lightIds` - An array of light ids associated with the group
- `modelId` - Available only for multisource luminaires, this is the model id of the fixture
- `uniqueId` - Available only for multisource luminaires, this is the unique id of the fixture
- `model` - Available when `modelId` is present, a `GroupModel` object that contains details about the model
- `anyOn` - True if any lights in the group are on, false if none are on
- `allOn` - True if all lights in the group are on, false if not

Similar to `Light` objects, `Group` objects provide action options for
the lights associated with the group:
- `on` - `true` for lights on, `false` if not, configurable
- `brightness` - Configurable brightness for the lights (value from 0 to 254)
- `colorMode` - Color mode group is respecting (e.g. ct, xy, hs)
- `hue` - Configurable hue of the lights (value from 0 to 65535)
- `saturation` - Configurable saturation of the lights, compliments `hue` (value from 0 to 254)
- `xy` - Configurable CIE x and y coordinates (value is an array containing x and y values)
- `colorTemp` - Configurable Mired Color temperature of the lights (value from 153 to 500)
- `transitionTime` - Configurable temporary value which eases transition of an effect (value in seconds, 0 for instant, 5 for five seconds)
- `alert` - Configurable alert effect (e.g. none, select, lselect)
- `effect` - Configurable effect (e.g. none, colorloop)
- `scene` - Configurable scene

Like `Light` objects, `Group` action properties are available for incrementing and
decrementing values:
- `incrementBrightness` - Increment or decrement brightness value
- `incrementHue` - Increment or decrement hue value
- `incrementSaturation` - Increment or decrement saturation value
- `incrementXy` - Increment or decrement xy values
- `incrementColorTemp` - Increment or decrement color temperature value

Huejay maintains a list of Philips Hue supported luminaire models. The `Group`
`model` attribute returns a `GroupModel` object. This object contains more
information about the model:
- `id` - Model Id, typically the same value as `Group` `modelId`
- `manufacturer` - Manufacturer of the model (e.g. Philips)
- `name` - Name of the model / product (e.g. Hue Beyond Table)
- `type` - Type of group, typically the same value as `Group` `type`

When a `Group`'s `type` is `Room`, the following classes can be associated with the group:

Class        | ...
------------ | ------------
Living room  | Gym
Kitchen      | Hallway
Dining       | Toilet
Bathroom     | Front door
Bedroom      | Garage
Kids bedroom | Terrace
Nursery      | Garden
Recreation   | Driveway
Office       | Other
Carport      |

*Note: The `client.groups.getAll` command does not return special group 0.
See `client.groups.getById` for instructions on retrieving this special group.*

#### client.groups.getById - Get group by id

Need a specific group? `client.groups.getById` accepts a group id. If a group
exists with that id, a `Group` object is returned, else a `huejay.Error` is
thrown.

```js
client.groups.getById(3)
  .then(group => {
    console.log('Found group:');
    console.log(`  Group [${group.id}]: ${group.name}`);
  })
  .catch(error => {
    console.log('Could not find group');
    console.log(error.stack);
  });
```

A **special group** is available which is accessible via group id **0**. This
group always contains all light ids registered on the bridge. Use this group
to control all lights at once.

```js
client.groups.getById(0)
  .then(group => {
    console.log('Special group 0');
    console.log('  Light Ids:', group.lightIds.join(', '));
  });
```

#### client.groups.create - Create a group

Creating a group is easy using Huejay. Instantiate a new `client.groups.Group`
object and set both a name and list of light ids.

```js
let group = new client.groups.Group;
group.name     = 'New group';
group.lightIds = [2, 4, 5];

client.groups.create(group)
  .then(group => {
    console.log(`Group [${group.id}] created`);
  })
  .catch(error => {
    console.log(error.stack);
  });
```

*Note: Action is not saved on group creation. You must save the group after
creation if action is configured.*

#### client.groups.save - Save a group's attributes and action

You can modify a `Group`'s attributes and action after creation/retrieval, and
then apply the changes on the bridge. Like `Light` objects, Huejay will only
apply deltas when saving groups.

To apply changes, use `client.groups.save`. The `Group` object is returned upon
save completion.

```js
client.groups.getById(6)
  .then(group => {
    group.name       = 'Brand new name';
    group.lightIds   = [4, 6, 8];

    group.on         = true;
    group.brightness = 254;
    group.effect     = 'colorloop';

    return client.groups.save(group);
  })
  .then(group => {
    console.log(`Group [${group.id}] was saved`);
  })
  .catch(error => {
    console.log(error.stack);
  });
```

The following `Group` object attributes and action are configurable:
- `name`
- `lightIds`
- `on`
- `brightness`
- `hue`
- `saturation`
- `xy`
- `colorTemp`
- `transitionTime`
- `alert`
- `effect`
- `incrementBrightness`
- `incrementHue`
- `incrementSaturation`
- `incrementXy`
- `incrementColorTemp`

#### client.groups.delete - Delete a group

To delete a group from the bridge, pass a group id or `Group` object to
`client.groups.delete`.

```js
client.groups.delete(3)
  .then(() => {
    console.log('Group was deleted');
  })
  .catch(error => {
    console.log('Group may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

*Note: It is not possible to delete multisource groups. Expect a `huejay.Error`
to be thrown if attempting to do so.*

### Schedules

Huejay makes it extremely simple to add scheduling to your bridge. Huejay is
the only client that abstracts the complicated bits of configuring commands and
timers for scheduled operations.

#### client.schedules.getAll - Retrieve all schedules

Retrieve all registered schedules on the bridge with `client.schedules.getAll`.
This command eventually returns a list of `Schedule` objects.

```js
client.schedules.getAll()
  .then(schedules => {
    for (let schedule of schedules) {
      console.log(`Schedule [${schedule.id}]: ${schedule.name}`);
      console.log(`  Description: ${schedule.description}`);
      console.log(`  Created: ${schedule.created}`);
      console.log(`  Local time: ${schedule.localTime}`);
      console.log(`  Status: ${schedule.status}`);
      console.log(`  Auto delete: ${Boolean(schedule.autoDelete)}`);
      console.log(`  Action:`);
      console.log(`    Method: ${schedule.action.method}`);
      console.log(`    Address: ${schedule.action.address}`);
      console.log(`    Body: ${JSON.stringify(schedule.action.body)}`);
      console.log();
    }
  });
```

`Schedule` objects are composed of the following attributes:
- `id` - Schedule Id, generated and assigned by the bridge on creation
- `name` - Name for the schedule, configurable
- `description` - Description for the schedule, configurable
- `created` - Date when schedule was created
- `localTime` - Configurable scheduled time, configurable, behavior differs by pattern
- `status` - `enabled` or `disabled`, configurable
- `autoDelete` - `true` or `false`, schedule is automatically deleted on expiration when `true`, configurable
- `action` - Hue native object representing the action to fire for the schedule, configurable

#### client.schedules.getById - Retrieve schedule by id

Use `client.schedules.getById` to retrieve a single schedule by id. A `Schedule`
object is eventually returned if found.

```js
client.schedules.getById(12)
  .then(schedule => {
    console.log(`Found schedule [${schedule.id}]: ${schedule.name}`);
  })
  .catch(error => {
    console.log('Could not find schedule');
    console.log(error.stack);
  });
```

#### client.schedules.create - Create a schedule

Huejay is the only Hue client that takes a lot of the guesswork out of manual
schedule creation. Other clients require you to know how the Philips Hue
schedules API works in order to create them.

```js
client.lights.getById(1)
  .then(light => {
    light.brightness = 1;

    let schedule = new client.schedules.Schedule;
    schedule.name        = 'Schedule name';
    schedule.description = 'Sets light brightness to 1 on December 25, 2016 09:00pm';
    schedule.localTime   = new client.timePatterns.AbsoluteTime('2016-12-25 21:00:00');
    schedule.action      = new client.actions.ChangeLightState(light);

    return client.schedules.create(schedule);
  })
  .then(schedule => {
    console.log(`Schedule [${schedule.id}] created`);
  })
  .then(error => console.log(error.stack));
```

To simplify configuring `localTime` and `action` attributes on `Schedule`
objects, use Huejay's provided time patterns and actions.

##### Time Patterns

Huejay provides a way to easily generating Hue compatible time patterns for
scheduling. Use these time pattern helpers for generating a compatible `localTime`
to `Schedule` objects. Be sure to configure your preferred *time zone* of choice
on the bridge.

Here are the time patterns available in Huejay:

###### Time Pattern: Absolute Time

Generate a specific date. When the bridge reaches this date, the scheduled action
is invoked.

```js
schedule.localTime = new client.timePatterns.AbsoluteTime('2016-12-30 12:00:00');
```

###### Time Pattern: Randomized Time

Generate a specific date with a random element. When the bridge reaches this date,
the scheduled action is invoked randomly between 0 and X seconds.

```js
schedule.localTime = new client.timePatterns.RandomizedTime(
  '2016-12-30 12:00:00',
  3600 // Seconds (3600 is one hour)
);
```

###### Time Pattern: Recurring Time

Generate a recurring weekly date. The bridge will invoke the action on each day
configured, at the specific time set.

This time pattern accepts a list of days as a combined integer. Huejay provides
human readable equivalents which can be combined via *bitwise or*.

```js
// Run action on Mondays, Saturdays, Sundays at 09:00:00
schedule.localTime = new client.timePatterns.RecurringTime(
  client.timePatterns.RecurringTime.MONDAY | client.timePatterns.RecurringTime.WEEKEND,
  '09:00:00'
);

// Available days (these values may move in the future)
client.timePatterns.RecurringTime.MONDAY;    // Monday
client.timePatterns.RecurringTime.TUESDAY;   // Tuesday
client.timePatterns.RecurringTime.WEDNESDAY; // Wednesday
client.timePatterns.RecurringTime.THURSDAY;  // Thursday
client.timePatterns.RecurringTime.FRIDAY;    // Friday
client.timePatterns.RecurringTime.SATURDAY;  // Saturday
client.timePatterns.RecurringTime.SUNDAY;    // Sunday
client.timePatterns.RecurringTime.WEEKDAY;   // Monday through Friday
client.timePatterns.RecurringTime.WEEKEND;   // Saturday and Sunday
```

###### Time Pattern: Timer

Generate a timer with the option to repeat.

```js
// Run action in 1 minute
schedule.localTime = new client.timePatterns.Timer(60);

// Run action in 30 seconds, cycling through timer 5 times
schedule.localTime = new client.timePatterns.Timer(30, 5);
```

##### Actions

Huejay assists in building actions for scheduling and rules. You can access
these actions via `client.actions`.

The following are actions available in Huejay:

###### Action: Change Light State

This action builds the necessary command for changing light state.

```js
// Retrieve a Light object and change state
light.brightness     = 254;
light.colorTemp      = 160;
light.transitionTime = 0.5;

// Instantiate action for use with Schedule or Rule objects
// This will determine changed state for the action
schedule.action = new client.actions.ChangeLightState(light);

// Instantiate with optional argument to force retrieve state
schedule.action = new client.actions.ChangeLightState(light, ['brightness']);
```

###### Action: Change Group Action

This action helps build command for changing group action.

```js
// Retrieve a Group object and change action
group.scene = '123456abc';

// Instantiate action for use with Schedule or Rule objects
// This will determine changed action for the action
schedule.action = new client.actions.ChangeGroupAction(group);

// Instantiate with optional argument to force retrieve action
schedule.action = new client.actions.ChangeGroupAction(group, ['scene', 'brightness']);
```

###### Action: Change Sensor State

This action assists with changing sensor state.

```js
// Retrieve a Sensor object and change state
sensor.state.status = 1;

// Instantiate action for use with Schedule or Rule objects
// This will determine changed action for the action
schedule.action = new client.actions.ChangeSensorState(sensor);

// Instantiate with optional argument to force retrieve state
schedule.action = new client.actions.ChangeSensorState(sensor, ['status']);
```

#### client.schedules.save - Save schedule

Schedules can be modified and saved. Pass a `Schedule` object to
`client.schedules.save` to update schedule attributes.

```js
client.schedules.getById(12)
  .then(schedule => {
    schedule.name      = 'New schedule name';
    schedule.localTime = new client.timePatterns.Timer(3600);

    return client.groups.getById(5)
      .then(group => {
        group.scene = '123456abcd';

        schedule.action = new client.actions.ChangeGroupAction(group);

        return client.schedules.save(schedule);
      });
  })
  .catch(error => console.log(error.stack));
```

The following attributes are modifiable:
- name
- description
- localTime
- status
- autoDelete
- action

#### client.schedules.delete - Delete a schedule

All it takes to delete a schedule from the bridge is to provide either a
schedule id or a `Schedule` object to the `client.schedules.delete` command.

```js
client.schedules.delete('12')
  .then(() => {
    console.log('Schedule was deleted');
  })
  .catch(error => {
    console.log('Schedule may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

*Note: Schedules may be auto-deleted by the bridge. You can see which schedules
are configured to auto-delete via `Schedule` object `autoDelete` flag.*

### Scenes

Huejay supports managing scenes on the Philips Hue. Scenes are the best way of
storing and recalling commonly used light configurations in your home.

*Note: To recall a scene, set the `scene` attribute on a `Group` object and save.
Alternatively, use the `client.scenes.recall` command.*

#### client.scenes.getAll - Retrieve all scenes

Retrieves all scenes from the bridge. This command returns an array of `Scene`
objects.

```js
client.scenes.getAll()
  .then(scenes => {
    for (let scene of scenes) {
      console.log(`Scene [${scene.id}]: ${scene.name}`);
      console.log('  Lights:', scene.lightIds.join(', '));
      console.log();
    }
  });
```

`Scene` objects are composed of the following attributes:
- `id` - User/application defined scene id (e.g. my-scene-id)
- `name` - Configurable name
- `lightIds` - Configurable array of associated light ids
- `owner` - User who created the scene
- `recycle` - Configurable option which will auto delete the scene
- `locked` - If `true`, scene is not deletable as it is being used by another resource
- `appData` - A configurable object consisting of `version` and `data` properties
- `picture` - Future field, probably storing picture URL
- `lastUpdated` - Date when scene was last updated
- `captureLightState` - Set to `true` to capture current light state for the scene
- `transitionTime` - Always `null` on access, but can be configured

The following methods are available on `Scene` objects:
- `getLightState(lightId)` - Get light state by light id. Values only available by `getById`.
- `setLightState(lightId, {property: 'value'})` - Set light state by light id.

#### client.scenes.getById - Retrieve scene by id

Retrieve a single scene by id. If the scene is not available, a `huejay.Error`
is thrown.

```js
client.scenes.getById('123456abcdef')
  .then(scene => {
    console.log(`Scene [${scene.id}]: ${scene.name}`);
    console.log('  Lights:', scene.lightIds.join(', '));
    console.log();
  })
  .catch(error => {
    console.log(error.stack);
  });
```

#### client.scenes.create - Create a scene

Scene creation is a breeze. Instantiate a new `client.scenes.Scene`, set a name,
lightIds, other attributes, and pass to `client.scenes.create`.

```js
let scene = new client.scenes.Scene;
scene.name           = 'Scene name';
scene.lightIds       = [1, 2, 3];
scene.recycle        = false;
scene.appData        = {version: 1, data: 'optional app data'};
scene.transitionTime = 2;

client.scenes.create(scene)
  .then(scene => {
    console.log(`Scene [${scene.id}] created...`);

    console.log('  Name:', scene.name);
    console.log('  Lights:', scene.lightIds.join(', '));
    console.log('  Owner:', scene.owner);
    console.log('  Recycle:', scene.recycle);
    console.log('  Locked:', scene.locked);
    console.log('  App data:', scene.appData);
    console.log('  Picture:', scene.picture);
    console.log('  Last Updated:', scene.lastUpdated);
    console.log('  Version:', scene.version);
  })
  .catch(error => {
    console.log(error.stack);
  });
```

These `Scene` object attributes can be configured for creation:
- `name`
- `lightIds`
- `recycle`
- `appData`
- `captureLightState`

#### client.scenes.save - Save a scene

`Scene` objects can be reconfigured and saved using `client.scenes.save`. Light
states can be configured with this command.

```js
client.scenes.getById('123456abcdef')
  .then(scene => {

    scene.name = 'New scene name';
    scene.lightIds = [9, 10];

    // Set light state for light id 9
    scene.setLightState(9, {
      brightness: 254,
      colorTemp:  250,
    });

    // Set light state for light id 10
    scene.setLightState(10, {
      brightness: 128,
      colorTemp:  300,
      effect:     'colorloop',
    });

    return client.scenes.save(scene)
  })
  .then(scene => {
    console.log(`Scene saved...`);
  })
  .catch(error => {
    console.log(error.stack);
  });
```

#### client.scenes.recall - Recall a scene

Recall a scene using the convenience command `client.scenes.recall`. Pass a
`Scene` object or scene id to recall the scene.

```js
client.scenes.recall('123456abcdef')
  .then(() => {
    console.log('Scene was recalled');
  })
  .catch(error => {
    console.log(error.stack);
  });
```

#### client.scenes.delete - Delete a scene

To delete a scene, provide a scene id or `Scene` object to
`client.scenes.delete`.

```js
client.scenes.delete('123456abcdef')
  .then(() => {
    console.log('Scene was deleted');
  })
  .catch(error => {
    console.log('Scene may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

*Note: Scenes being used or referenced by other resources may not be deleted.*

### Sensors

Buy a Hue Tap or Dimmer Switch and want to configure these add-ons without the
Philips Hue app? Want to create your own virtual sensors for customizable flags
and values to invoke light effects? Use Huejay's set of sensor commands to do
so.

#### client.sensors.scan - Scan for new sensors

This command is useful for finding new sensors/devices not yet registered with
your bridge. Remember to enable pairing mode on the device before calling
`client.sensors.scan`.

The bridge scans for new sensors for 30 seconds before stopping.

```js
client.sensors.scan()
  .then(() => {
    console.log('Started new sensor scan');
  });
```

#### client.sensors.getNew - Get new sensors

After running `client.sensors.scan`, you can use `client.sensors.getNew` to
retrieve a list of newly registered sensors. An array of `Sensor` objects is
returned.

```js
client.sensors.getNew()
  .then(sensors => {
    console.log('Found new sensors:');
    for (let sensor of sensors) {
      console.log(`Sensor [${sensor.id}]:`);
      console.log('  Unique Id:', sensor.uniqueId);
      console.log('  Model:',     sensor.model.name);
    }
  });
```

See below for more information on `Sensor` objects.

#### client.sensors.getAll - Get all sensors

Retrieve all sensors registered to the bridge with `client.sensors.getAll`. This
command will eventually return an array of `Sensor` objects.

```js
client.sensors.getAll()
  .then(sensors => {
    for (let sensor of sensors) {
      console.log(`Sensor [${sensor.id}]: ${sensor.name}`);
      console.log(`  Type:             ${sensor.type}`);
      console.log(`  Manufacturer:     ${sensor.manufacturer}`);
      console.log(`  Model Id:         ${sensor.modelId}`);
      console.log('  Model:');
      console.log(`    Id:             ${sensor.model.id}`);
      console.log(`    Manufacturer:   ${sensor.model.manufacturer}`);
      console.log(`    Name:           ${sensor.model.name}`);
      console.log(`    Type:           ${sensor.model.type}`);
      console.log(`  Software Version: ${sensor.softwareVersion}`);
      console.log(`  Unique Id:        ${sensor.uniqueId}`);
      console.log(`  Config:`);
      console.log(`    On:             ${sensor.config.on}`);
      console.log(`  State:`);
      console.log(`    Last Updated:   ${sensor.state.lastUpdated}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
```

`Sensor` objects consist of the following attributes:
- `id` - Numerical id of the sensor as registered on the bridge
- `name` - Configurable name for the sensor
- `type` - Sensor type (e.g. Daylight, CLIPTemperature, ZGPSwitch)
- `modelId` - Model Id of the sensor, used for determining `SensorModel`
- `model` - A `SensorModel` object, containing details about the model
- `productId` - Unique identifying hardware model (*Note: Not available for all sensors*)
- `softwareVersion` - Software version of the sensor
- `softwareConfigId` - Software config id of the light (*Note: Not available for all sensors*)
- `uniqueId` - Unique Id of the sensor (typically hardware id)
- `config` - An object with configurable attributes (dependent on sensor type)
- `state` An object with state attributes (dependent on sensor type)

The `model` attribute on `Sensor` objects include:
- `id` - Model Id, typically the same value as `Sensor` `modelId`
- `manufacturer` - Manufacturer, typically the same value as `Sensor` `manufacturer`
- `name` - Name of the model / product
- `type` - Type of the sensor, typically the same value as `Sensor` `type`

Support values for `Sensor` `type` includes the following:
- CLIPGenericFlag
- CLIPGenericStatus
- CLIPHumidity
- CLIPOpenClose
- CLIPPresence
- CLIPSwitch
- CLIPTemperature

Configuration for `Sensor` objects is available via the `config` attribute.
This object contains configurable attributes for the sensor, and may be different
for each `Sensor` `type`. See [sensor types](lib/SensorType) for available
configuration for each sensor type.

The following `config` attributes are available for all sensor types:
- `on` - `true` to enable the sensor, `false` to not, configurable

State for the `Sensor` objects is accessible via the `state` attribute. Like
configuration, the contents of the `state` object may be different for each
`Sensor` `type`. Rules can be configured to react to sensor state changes.
See [sensor types](lib/SensorType) for available state for all supported sensor
types.

The following `state` attributes are available for all sensor types:
- `lastUpdated` - Time the sensor state last changed

#### client.sensors.getById - Get sensor by id

A single sensor can be fetched by way of `client.sensors.getById`. If the sensor
is available A `Sensor` object is returned if one matching the id is found,
otherwise a `huejay.Error` is thrown.

```js
client.sensors.getById(1)
  .then(sensor => {
    console.log('Found sensor:');
    console.log(`  Sensor [${sensor.id}]: ${sensor.name}`);
  })
  .catch(error => {
    console.log('Could not find sensor');
    console.log(error.stack);
  });
```

#### client.sensors.create - Create a sensor

Want to register your own virtual sensor with the bridge? Use the
`client.sensors.create` command to create a custom sensor.

```js
let sensor = new client.sensors.Sensor;

// Set base sensor attributes
sensor.name            = 'My temp sensor';
sensor.modelId         = 'Custom model id';
sensor.softwareVersion = '0.0.1';
sensor.type            = 'CLIPTemperature';
sensor.uniqueId        = '00:11:22';
sensor.manufacturer    = 'Huejay';

// Set sensor configuration
sensor.config.on = true;

// Set sensor state
sensor.state.temperature = 10.2; // Temperature in Celsius

// Create the sensor
client.sensors.create(sensor)
  .then(sensor => {
    console.log(`New sensor [${sensor.id}] created`);
  })
  .catch(error => {
    console.log('Issue creating sensor');
    console.log(error.stack);
  });
```

`config` and `state` attributes differ for each `Sensor` `type`. See above
for more details.

#### client.sensors.save - Save a sensor

Sensor attributes, configuration, and state can be changed after registration
with the bridge (either through `client.sensors.scan` or `client.sensors.create`).

To save changes made to a `Sensor` object, pass the `Sensor` to `client.sensors.save`.
Huejay is intelligent enough to save only changed attributes, config, and state.

```js
client.sensors.getById(8)
  .then(sensor => {
    sensor.name = 'My updated sensor';

    // Set sensor configuration
    sensor.config.on = false;

    // Set state
    sensor.state.temperature = 28.5; // Temperature in Celsius

    return client.sensors.save(sensor);
  })
  .then(sensor => {
    console.log(`Sensor [${sensor.id}] was saved`);
  })
  .catch(error => {
    console.log(error.stack);
  });
```

#### client.sensors.delete - Delete a sensor

Delete a sensor from the bridge by passing an id or `Sensor` object to
`client.sensors.delete`.

```js
client.sensors.delete(8)
  .then(() => {
    console.log('Sensor was deleted');
  })
  .catch(error => {
    console.log('Sensor may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

### Rules

After sensors are registered with the bridge, rules may be created to react
to sensor state changes. For example, if the temperature changes on a sensor,
or a button is pressed, you may want a light (or even a group of lights) to
change color. Rules satisfy this.

#### client.rules.getAll - Get all rules

Use `client.rules.getAll` to retrieve all rules. This will eventually return
an array of `Rule` objects.

```js
client.rules.getAll()
  .then(rules => {
    for (let rule of rules) {
      console.log(`Rule [${rule.id}]: ${rule.name}`);
      console.log(`  Created:         ${rule.created}`);
      console.log(`  Last Triggered:  ${rule.lastTriggered}`);
      console.log(`  Times Triggered: ${rule.timesTriggered}`);
      console.log(`  Owner:           ${rule.owner}`);
      console.log(`  Status:          ${rule.status}`);

      console.log(`  Conditions:`);
      for (let condition of rule.conditions) {
        console.log(`    Address:  ${condition.address}`);
        console.log(`    Operator: ${condition.operator}`);
        console.log(`    Value:    ${condition.value}`);
        console.log();
      }

      console.log(`  Actions:`);
      for (let action of rule.actions) {
        console.log(`    Address: ${action.address}`);
        console.log(`    Method:  ${action.method}`);
        console.log(`    Body:    ${JSON.stringify(action.body)}`);
        console.log();
      }

      console.log();
    }
  });
```

`Rule` objects contain the following attributes:
- `id` - Numerical id of the rule, assigned by the bridge on creation
- `name` - Name of the rule, configurable
- `lastTriggered` - Date last time rule was triggered
- `timesTriggered` - Number of times rule was triggered
- `owner` - User who created the rule
- `status` - `enabled` or `disabled`, rule is triggerable on `enabled`, configurable
- `conditions` - An array of objects representing conditions, configurable
- `actions` - An array of objects representing actions, configurable

`Rule` `conditions` have the following attributes:
- `address` - The sensor resource/state location for the condition
- `operator` - The operator for the condition, described below
- `value` - The value used in conjunction with `operator`

`Rule` `actions` attributes:
- `address` - The actionable resource location
- `method` - Type of method for the action (e.g. GET, PUT)
- `body` - The body of the action, an object

There are several operators available for use with conditions:
- `gt` - Greater than: condition is satisfied when sensor state is greater than condition's `value`
- `lt` - Less than: condition is satisfied when sensor state is less than condition's `value`
- `eq` - Equal to: condition is satisfied when sensor state equals the condition's `value`
- `dx` - Changed: condition is satisfied when sensor state changes to a different value
- `ddx` - Delayed changed: condition is satisfied when sensor delayed state changes to a different value
- `stable` - Stable: condition is satisfied when sensor state is stable for condition's `value`
- `not stable` - Not stable: condition is satisfied when sensor state is not stable for condition's `value`
- `in` - In: Condition is satisfied when time is within start/end time
- `not in` - Not in: Condition is satisfied when time is not within start/end time

*Note: Huejay abstracts the raw operator values on creating conditions.*

#### client.rules.getById - Get by id

Get a single rule with `client.rules.getById`. A `Rule` object is eventually
returned if one is found with the provided id.

```js
client.rules.getById(3)
  .then(rule => {
    console.log(`Found: Rule [${rule.id}] - ${rule.name}`);
  })
  .catch(error => console.log(error.stack));
```

#### client.rules.create - Create a rule

Unlike other clients, Huejay reduces the complexity of creating rules on the
bridge. Supply a `Rule` object to `client.rules.create` to create a brand new
rule.

A rule must contain at least 1 condition and 1 action to be created. Use the
`addCondition` method for adding conditions, and the `addAction` method to add
actions (using the same actions available for schedules).

```js
// Retrieve sensor and group for configuring rule
Promise.all([
  client.sensors.getById(31),
  client.groups.getById(0),
])
  .then(results => {
    let sensor = results[0];
    let group  = results[1];

    // Configure group light state to off (this will be used for rule action)
    group.on = false;

    // Build rule
    let rule = new client.rules.Rule;
    rule.name   = 'My rule: All lights off on 42';
    rule.status = 'enabled'; // Optional, defaults to 'enabled'

    // Add 2 conditions to the rule (both must be satisfied to trigger rule)
    rule.addCondition(sensor).when('buttonEvent').equals(42);
    rule.addCondition(sensor).when('lastUpdated').changes();

    // Add an action to invoke when rule is triggered
    rule.addAction(new client.actions.ChangeGroupAction(group));

    return client.rules.create(rule);
  })
  .then(rule => {
    console.log(`Rule [${rule.id}] created...`);
  })
  .catch(error => console.log(error.stack));
```

The `addCondition` helper method makes adding conditions to rules easy. This
method returns a `Condition` object, which includes several chainable
methods for configuring a condition. A `Sensor` object is required to use
this helper due to the state field needing to be translated to the type's native
field format.

```js
// Greater than (gt) operator
rule.addCondition(sensor).when('state1').greaterThan(10);

// Less than (lt) operator
rule.addCondition(sensor).when('state2').lessThan(5);

// Equals (eq) operator
rule.addCondition(sensor).when('state3').equals(true);

// Changes (dx) operator
rule.addCondition(sensor).when('state4').changes();
```

*Note: Rules support a maximum of 8 conditions, and a maximum of 8 actions.
A minimum of 1 condition and 1 action is required for creating and saving
a rule.*

#### client.rules.save - Save a rule

Need to make a modification to an existing rule? Use the `client.rules.save`
command to save a rule. More conditions and actions can be added to a rule
prior to saving as well.

```js
client.rules.getById(4)
  .then(rule => {
    // Change rule name and disable
    rule.name   = 'New rule name';
    rule.status = 'disabled';

    return client.rules.save(rule);
  })
  .catch(error => console.log(error.stack));
```

The following `Rule` object attributes can be saved:
- `name`
- `status`
- `conditions`
- `actions`

It is possible to clear existing conditions and actions on a rule for providing
a new set of conditions and actions.

```js
client.rules.getById(4)
  .then(rule => {
    // Clears conditions on the rule
    rule.clearConditions();

    // Clears actions on the rule
    rule.clearActions();

    // Add conditions and actions here.
  });
```

#### client.rules.delete - Delete a rule

To remove a rule, pass either a `Rule` object or a rule id to the
`client.rules.delete` command.

```js
client.rules.delete(3)
  .then(() => {
    console.log('Rule was deleted');
  })
  .catch(error => {
    console.log('Rule may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

### Resource Links

Want a way to group together various resources on the bridge? Resource Links
are used to combine various resources (lights, groups, schedules, etc).

*Note: Huejay's API for managing resource links is not yet finalized.*

#### client.resourceLinks.getAll - Get all resource links

`client.resourceLinks.getAll` can be used to retrieve all resource links from
the bridge, which will return a list of `ResourceLink` objects via a promise.

```js
client.resourceLinks.getAll()
  .then(resourceLinks => {
    for (let resourceLink of resourceLinks) {
      console.log(`Resource Link [${resourceLink.id}]:`, resourceLink.name);
      console.log(`  Description: ${resourceLink.description}`);
      console.log(`  Type: ${resourceLink.type}`);
      console.log(`  Class Id: ${resourceLink.classId}`);
      console.log(`  Owner: ${resourceLink.owner}`);
      console.log(`  Recycle: ${resourceLink.recycle}`);
      console.log(`  Links: ${resourceLink.links}`);
      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });
```

#### client.resourceLinks.getById - Get by id

To retrieve a single resource link, use `client.resourceLinks.getById`. This command
will eventually a return a `ResourceLink` object if found by provided resource
link id.

```js
client.resourceLinks.getById(12345)
  .then(resourceLink => {
    console.log(`Found: Resource Link [${resourceLink.id}] - ${resourceLink.name}`);
  })
  .catch(error => console.log(error.stack));
```

#### client.resourceLinks.create - Create a resource link

Create resource links using the `client.resourceLinks.create` command.

```js
let resourceLink = new client.resourceLinks.ResourceLink;

// Set resource link attributes
resourceLink.name        = 'Resource link name here';
resourceLink.description = 'Resource link description here';
resourceLink.classId     = 1;
resourceLink.links       = ['/groups/1'];

// Create the resource link
client.resourceLinks.create(resourceLink)
  .then(sensor => {
    console.log(`New resource link [${resourceLink.id}] created`);
  })
  .catch(error => {
    console.log('Issue creating resource link');
    console.log(error.stack);
  });
```

#### client.resourceLinks.save - Save a resource link

Resource links can be modified. There is a limited set of attributes that
can be saved on these objects. Use `client.resourceLinks.save` to save an
existing resource link.

```js
client.resourceLinks.getById(12345)
  .then(resourceLink => {
    // Change resource link name, description, and link set
    resourceLink.name        = 'New resource link name';
    resourceLink.description = 'New description';
    resourceLink.links       = ['/groups/1', '/groups/2'];

    return client.resourceLinks.save(resourceLink);
  })
  .catch(error => console.log(error.stack));
```

The following `ResourceLink` object attributes can be saved:
- `name`
- `description`
- `links`

#### client.resourceLinks.delete - Delete a resource link

Resource links can be deleted using the `client.resourceLinks.delete` command.

```js
client.resourceLinks.delete(12345)
  .then(() => {
    console.log('Resource link was deleted');
  })
  .catch(error => {
    console.log('Resource link may have been removed already, or does not exist');
    console.log(error.stack);
  });
```

### Capabilities

Get bridge resource limits and timezones.

#### client.capabilities.lights

Retrieve bridge light limits with the command `client.capabilities.lights`.
This command will eventually return an object describe the limits of the bridge
around the light resource.

```js
client.capabilities.lights()
  .then(lights => {
    console.log('Lights:');
    console.log(`  Available light slots: ${lights.available}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
```

You can retrieve additional information about other bridge capabilities with
the following commands:
- `client.capabilities.sensors`
- `client.capabilities.groups`
- `client.capabilities.scenes`
- `client.capabilities.schedules`
- `client.capabilities.rules`
- `client.capabilities.resourceLinks`

#### client.capabilities.getTimeZones

Retrieve a list of supported time zones by calling `client.capabilities.getTimeZones`.

```js
client.capabilities.getAll()
  .then(timeZones => {
    for (let timeZone of timeZones) {
      console.log(timeZone);
    }
  });
```

### Time Zones

The Philips Hue bridge supports configuring a local time zone. This is useful
for scheduling functions. Numerous time zones are registered on the bridge for
retrieval.

#### client.timeZones.getAll - Get all time zones

You can retrieve a list of supported time zones by calling
`client.timeZones.getAll`. This will return an array of string values.

```js
client.timeZones.getAll()
  .then(timeZones => {
    for (let timeZone of timeZones) {
      console.log(timeZone);
    }
  });
```

## Examples

Want to see more examples? View them in the [examples](examples) directory included
in this repository.

## Logo

Huejay's initial logo was designed by scorpion6 on Fiverr. Font used is Lato Bold.

## Additional Resources

Looking for more Philips Hue resources?
- [Philips Hue Product Page](http://www2.meethue.com/en-us/)
- [Philips Hue Store](https://www.store.meethue.com/us)
- [Hue Portal](https://my.meethue.com/en-us/)
- [Philips Hue Official Documentation](http://www.developers.meethue.com)
- [Philips Hue Release Notes](http://www2.meethue.com/en-us/release-notes/)
- [Reddit Hue Subreddit](https://www.reddit.com/r/hue)
- [SqMK's Philips Hue client for PHP](https://github.com/sqmk/Phue)

## License

This software is licensed under the MIT License. [View the license](LICENSE).

Copyright © 2015-2016 [Michael K. Squires](http://sqmk.com)
