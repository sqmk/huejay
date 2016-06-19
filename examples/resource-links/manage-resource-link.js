#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Creating resource link...');

let resourceLink = new client.resourceLinks.ResourceLink;
resourceLink.name        = 'Resource link name here';
resourceLink.description = 'Resource link description here';
resourceLink.classId     = 1;
resourceLink.links       = ['/groups/1'];

client.resourceLinks.create(resourceLink)
  .then(resourceLink => {
    console.log(`New resource link [${resourceLink.id}]:`);

    return resourceLink.id;
  })
  .then(resourceLinkId => {
    console.log(`Retrieving resource link ${resourceLinkId}`);

    return client.resourceLinks.getById(resourceLinkId);
  })
  .then(resourceLink => {
    console.log('Updating resource link');

    resourceLink.name        = 'New resource link name here';
    resourceLink.description = 'New resource link description here';
    resourceLink.links       = ['/groups/2', '/groups/3'];

    return client.resourceLinks.save(resourceLink);
  })
  .then(resourceLink => {
    console.log('Deleting resource link');

    return client.resourceLinks.delete(resourceLink);
  })
  .catch(error => {
    console.log(error.stack);
  });
