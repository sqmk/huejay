#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving rules...');
console.log();

client.rules.getAll()
  .then(rules => {
    for (let rule of rules) {
      console.log(`Rule [${rule.id}]: ${rule.name}`);
      console.log(`  Last Triggered: ${rule.lastTriggered}`);
      console.log(`  Created: ${rule.created}`);
      console.log(`  Times Triggered: ${rule.timesTriggered}`);
      console.log(`  Owner: ${rule.owner}`);
      console.log(`  Status: ${rule.status}`);
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
  })
  .catch(error => {
    console.log(error.stack);
  });
