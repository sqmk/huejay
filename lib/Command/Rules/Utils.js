'use strict';

let Condition = require('../../Model/Condition');
let Rule      = require('../../Model/Rule');

const RULE_ATTRIBUTE_MAP = {
  'id':             'id',
  'name':           'name',
  'lasttriggered':  'lastTriggered',
  'created':        'created',
  'timestriggered': 'timesTriggered',
  'owner':          'owner',
  'status':         'status',
  'conditions':     'conditions',
  'actions':        'actions',
};

const OPERATOR_MAP = {
  'gt': 'greaterThan',
  'lt': 'lessThan',
  'eq': 'equals',
  'dx': 'changes',
  '*':  'unknown',
};

let utils = {};

/**
 * Build rule
 *
 * @param {Object} result Result
 *
 * @return {Rule} Rule
 */
utils.buildRule = function (result) {
  result.conditions = result.conditions.map(condition => {
    return this.buildCondition(condition);
  });

  result.actions = result.actions.map(action => {
    return action;
  });

  return new Rule(this.mapRuleAttributes(result));
};

/**
 * Map rule attributes
 *
 * @param {Object} result Result
 *
 * @return {Object} Attributes
 */
utils.mapRuleAttributes = function (result) {
  let attributes = {};

  if (result !== undefined) {
    for (let key in result) {
      if (key in RULE_ATTRIBUTE_MAP) {
        attributes[RULE_ATTRIBUTE_MAP[key]] = result[key];
      }
    }
  }

  return attributes;
};

/**
 * Build condition
 *
 * @param {Object} result Result
 *
 * @return {Condition} Condition
 */
utils.buildCondition = function (result) {
  let condition = new Condition;

  condition.sensorId  = result.address.match(/^\/sensors\/(\d+)/)[1];
  condition.attribute = result.address.match(/\/state\/(.*?)$/)[1];
  condition.operator  = result.operator in OPERATOR_MAP
    ? OPERATOR_MAP[result.operator]
    : OPERATOR_MAP['*'];
  condition.value     = 'value' in result ? result.value : null;

  return condition;
};

module.exports = utils;
