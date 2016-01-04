'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Rule             = require('../Model/Rule');
let Condition        = require('../Model/Condition');

// Commands
let GetRules   = require('../Command/Rule/GetRules');
let GetRule    = require('../Command/Rule/GetRule');
let CreateRule = require('../Command/Rule/CreateRule');
let SaveRule   = require('../Command/Rule/SaveRule');
let DeleteRule = require('../Command/Rule/DeleteRule');

/**
 * Rules accessor
 */
class Rules extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Rule      = Rule;
    this.Condition = Condition;
  }

  /**
   * Get all rules
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
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
    return this.client.invokeCommand(new GetRule(id));
  }

  /**
   * Create rule
   *
   * @param {Rule} rule Rule
   *
   * @return {Promise} Promise for chaining
   */
  create(rule) {
    return this.client.invokeCommand(new CreateRule(rule));
  }

  /**
   * Save rule
   *
   * @param {Rule} rule Rule
   *
   * @return {Promise} Promise for chaining
   */
  save(rule) {
    return this.client.invokeCommand(new SaveRule(rule));
  }

  /**
   * Delete rule
   *
   * @param {mixed} rule Rule or rule id
   *
   * @return {[type]} [description]
   */
  delete(rule) {
    return this.client.invokeCommand(new DeleteRule(rule));
  }
}

module.exports = Rules;
