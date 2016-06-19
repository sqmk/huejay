#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating rule...');

let rule = new client.rules.Rule;
rule.name   = 'Fake sensor: All lights off';
rule.status = 'enabled';

Promise.all([
  client.sensors.getById(31),
  client.groups.getById(0),
  client.groups.getById(1),
])
  .then(results => {
    let sensor = results[0];
    let group  = results[1];
    let group2 = results[2];

    group.on = false;

    rule.addCondition(sensor).when('buttonEvent').equals(42);
    rule.addCondition(sensor).when('lastUpdated').changes();
    rule.addAction(new client.actions.ChangeGroupAction(group));

    return client.rules.create(rule)
      .then(() => {
        console.log(`Rule [${rule.id}] created...`);

        rule.name   = 'Fake sensor: Updated name';
        rule.status = 'disabled';
        rule.addAction(new client.actions.ChangeGroupAction(group2, ['brightness']));

        console.log('Updating rule...');

        return client.rules.save(rule);
      })
      .then(() => {
        console.log('Deleting rule...');

        return client.rules.delete(rule);
      });
  })
  .catch(error => console.log(error.stack));
