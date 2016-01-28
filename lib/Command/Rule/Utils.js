'use strict';

let AbstractAction = require('../../Action/AbstractAction');
let Condition      = require('../../Model/Condition');
let Error          = require('../../Error');
let Rule           = require('../../Model/Rule');

/**
 * Rule utils
 */
class Utils {
  /**
   * Validate rule
   *
   * @param {mixed} rule Rule object
   *
   * @return {bool} True if valid
   */
  static validateRule(rule) {
    if (rule instanceof Rule) {
      return true;
    }

    throw new Error({
      message: 'Expecting Rule'
    });
  }

  /**
   * Build rule
   *
   * @param {Object} result Result
   *
   * @return {Rule} Rule
   */
  static buildRule(result) {
    return new Rule(result);
  }

  /**
   * Convert conditions
   *
   * @param {Rule} rule Rule
   */
  static convertConditions(rule) {
    rule.conditions = rule.conditions.map(condition => {
      if (!(condition instanceof Condition)) {
        return condition;
      }

      return {
        'address':  `/sensors/${condition.sensor.id}/state/${condition.attribute}`,
        'operator': condition.operator,
        'value':    condition.value
      };
    });
  }

  /**
   * Convert rule actions
   *
   * @param {Rule}   rule   Rule
   * @param {Client} client Client
   */
  static convertActions(rule, client) {
    rule.actions = rule.actions.map(action => {
      if (!(action instanceof AbstractAction)) {
        return action;
      }

      return action.exportAction(client);
    });
  }
}

module.exports = Utils;
