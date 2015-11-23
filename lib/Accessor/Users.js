'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let User             = require('../Model/User');

/**
 * Users accessor
 */
class Users extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.User = User;
  }

  /**
   * Get all users
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    let GetUsers = require('../Command/User/GetUsers');

    return this.client.invokeCommand(new GetUsers);
  }

  /**
   * Get currently authed user
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    let GetUser = require('../Command/User/GetUser');

    return this.client.invokeCommand(new GetUser(this.client.username));
  }

  /**
   * Get user by username
   *
   * @param {mixed} username Username or User object
   *
   * @return {Promise} Promise for chaining
   */
  getByUsername(username) {
    let GetUser = require('../Command/User/GetUser');

    return this.client.invokeCommand(new GetUser(username));
  }

  /**
   * Create user
   *
   * @param {string} deviceType Device type (optional)
   *
   * @return {Promise} Promise for chaining
   */
  create(deviceType) {
    let CreateUser = require('../Command/User/CreateUser');

    return this.client.invokeCommand(new CreateUser(deviceType));
  }

  /**
   * Delete user
   *
   * @param {mixed} user Username or User object
   *
   * @return {Promise} Promise for chaining
   */
  delete(user) {
    let DeleteUser = require('../Command/User/DeleteUser');

    return this.client.invokeCommand(new DeleteUser(user));
  }
}

module.exports = Users;
