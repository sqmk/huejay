'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let Group            = require('../Model/Group');

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
    let GetGroups = require('../Command/Group/GetGroups');

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
    let GetGroup = require('../Command/Group/GetGroup');

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
    let CreateGroup = require('../Command/Group/CreateGroup');

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
    let SaveGroup      = require('../Command/Group/SaveGroup');
    let SaveGroupState = require('../Command/Group/SaveGroupState');

    return Promise.all([
      this.client.invokeCommand(new SaveGroup(group)),
      this.client.invokeCommand(new SaveGroupState(group))
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
    let DeleteGroup = require('../Command/Group/DeleteGroup');

    return this.client.invokeCommand(new DeleteGroup(group));
  }
}

module.exports = Groups;
