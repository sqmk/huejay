'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Group            = require('../Model/Group');

// Commands
let GetGroups       = require('../Command/Group/GetGroups');
let GetGroup        = require('../Command/Group/GetGroup');
let CreateGroup     = require('../Command/Group/CreateGroup');
let SaveGroup       = require('../Command/Group/SaveGroup');
let SaveGroupAction = require('../Command/Group/SaveGroupAction');
let DeleteGroup     = require('../Command/Group/DeleteGroup');

/**
 * Groups accessor
 */
class Groups extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.Group = Group;
  }

  /**
   * Get groups
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    return this.client.invokeCommand(new GetGroups);
  }

  /**
   * Get group by id
   *
   * @param {string} id Group Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(id) {
    return this.client.invokeCommand(new GetGroup(id));
  }

  /**
   * Create group
   *
   * @param {Group} group Group
   *
   * @return {Promise} Promise for chaining
   */
  create(group) {
    return this.client.invokeCommand(new CreateGroup(group));
  }

  /**
   * Save group
   *
   * @param {Group} group Group
   *
   * @return {Promise} Promise for chaining
   */
  save(group) {
    return Promise.all([
      this.client.invokeCommand(new SaveGroup(group)),
      this.client.invokeCommand(new SaveGroupAction(group))
    ]).then(() => {
      return group;
    });
  }

  /**
   * Delete group
   *
   * @param {Group} group Group object or group Id
   *
   * @return {Promise} Promise for chaining
   */
  delete(group) {
    return this.client.invokeCommand(new DeleteGroup(group));
  }
}

module.exports = Groups;
