#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log(`Retrieving bridge (${client.host})...`);

client.bridge.get()
  .then(bridge => {
    console.log(`Bridge:`);
    console.log(`  Id:                 ${bridge.id}`);
    console.log(`  Name:               ${bridge.name}`);
    console.log(`  Model Id:           ${bridge.modelId}`);
    console.log(`  Factory new:        ${bridge.factoryNew}`);
    console.log(`  Replaces bridge:    ${bridge.replacesBridgeId}`);
    console.log(`  Date Store Version: ${bridge.dataStoreVersion}`);
    console.log(`  Starter Kit Id:     ${bridge.starterKitId}`);
    console.log();

    console.log(`Model:`);
    console.log(`  Id:           ${bridge.model.id}`);
    console.log(`  Manufacturer: ${bridge.model.manufacturer}`);
    console.log(`  Name:         ${bridge.model.name}`);
    console.log();

    console.log(`Versions:`);
    console.log(`  Software Version: ${bridge.softwareVersion}`);
    console.log(`  API Version:      ${bridge.apiVersion}`);
    console.log();

    console.log(`Zigbee:`);
    console.log(`  Channel: ${bridge.zigbeeChannel}`);
    console.log();

    console.log(`Network details:`);
    console.log(`  MAC Address:  ${bridge.macAddress}`);
    console.log(`  IP Address:   ${bridge.ipAddress}`);
    console.log(`  DHCP enabled: ${bridge.dhcpEnabled}`);
    console.log(`  Netmask:      ${bridge.netmask}`);
    console.log(`  Gateway:      ${bridge.gateway}`);
    console.log();

    console.log(`Proxy:`);
    console.log(`  Address: ${bridge.proxyAddress}`);
    console.log(`  Port:    ${bridge.proxyPort}`);
    console.log();

    console.log(`Time:`);
    console.log(`  UTC:        ${bridge.utcTime}`);
    console.log(`  Time zone:  ${bridge.timeZone}`);
    console.log(`  Local time: ${bridge.localTime}`);
    console.log();

    console.log(`Portal:`);
    console.log(`  Services enabled: ${bridge.portalServicesEnabled}`);
    console.log(`  Connected:        ${bridge.portalConnected}`);
    console.log();

    console.log(`Functions:`);
    console.log(`  Link button enabled: ${bridge.linkButtonEnabled}`);
    console.log(`  Touchlink enabled:   ${bridge.touchlinkEnabled}`);
    console.log();
  })
  .catch(error => {
    console.log(error.stack);
  });
