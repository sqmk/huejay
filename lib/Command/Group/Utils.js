'use strict';

let Error = require('../../Error');
let Group = require('../../Model/Group');

const GROUP_ATTRIBUTE_MAP = {
  'id':       'id',
  'name':     'name',
  'type':     'type',
  'class':    'class',
  'lights':   'lightIds',
  'modelid':  'modelId',
  'uniqueid': 'uniqueId'
};

const GROUP_STATE_MAP = {
  'on':             'on',
  'bri':            'brightness',
  'colormode':      'colorMode',
  'hue':            'hue',
  'sat':            'saturation',
  'xy':             'xy',
  'ct':             'colorTemp',
  'transitiontime': 'transitionTime',
  'alert':          'alert',
  'effect':         'effect',
  'scene':          'scene',
};

let utils = {};

/**
 * Build group
 *
 * @param {Object} result Result
 *
 * @return {Group} Group
 */
utils.buildGroup = function (result) {
  let attributes = this.mapGroupAttributes(result);
  let state      = this.mapGroupState(result.action);

  return new Group(attributes, state);
};

/**
 * Map group attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapGroupAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key in result) {
      if (key in GROUP_ATTRIBUTE_MAP) {
        attributes[GROUP_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

/**
 * Map group state
 *
 * @param {Object} result Result
 *
 * @return {Object} State
 */
utils.mapGroupState = function (result) {
  let state = {};

  if (result !== undefined) {
    for (let key in result) {
      if (key in GROUP_STATE_MAP) {
        state[GROUP_STATE_MAP[key]] = result[key];
      }
    }
  }

  return state;
};

/**
 * Validate group
 *
 * @param {mixed} group Group object
 *
 * @return {bool} True if valid
 */
utils.validateGroup = function (group) {
  if (group instanceof Group) {
    return true;
  }

  throw new Error({
    description: 'Expecting Group'
  });
};

module.exports = utils;
