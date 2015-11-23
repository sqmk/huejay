'use strict';

let Rule      = require('../Model/Rule');
let Condition = require('../Model/Condition');

/**
 * Rules accessor
 */
class Rules {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    this.client    = client;
    this.Rule      = Rule;
    this.Condition = Condition;
  }

  /**
   * Get all rules
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    let GetRules = require('../Command/Rules/GetRules');

    return this.client.invokeCommand(new GetRules);
  }

  /**
   * Get rule by id
   *
   * @param {string} id Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(id) {
    let GetRule = require('../Command/Rules/GetRule');

    return this.client.invokeCommand(new GetRule(id));
  }

  /**
   * Delete rule
   *
   * @param {mixed} rule Rule or rule id
   *
   * @return {[type]} [description]
   */
  delete(rule) {
    let DeleteRule = require('../Command/Rules/DeleteRule');

    return this.client.invokeCommand(new DeleteRule(rule));
  }
}

module.exports = Rules;
