'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let User             = require('../Model/User');

// Commands
let GetUsers   = require('../Command/User/GetUsers');
let GetUser    = require('../Command/User/GetUser');
let CreateUser = require('../Command/User/CreateUser');
let DeleteUser = require('../Command/User/DeleteUser');

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
    return this.client.invokeCommand(new GetUsers);
  }

  /**
   * Get currently authed user
   *
   * @return {Promise} Promise for chaining
   */
  get() {
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
    return this.client.invokeCommand(new GetUser(username));
  }

  /**
   * Create user
   *
   * @param {User} user User
   *
   * @return {Promise} Promise for chaining
   */
  create(user) {
    return this.client.invokeCommand(new CreateUser(user));
  }

  /**
   * Delete user
   *
   * @param {mixed} user Username or User object
   *
   * @return {Promise} Promise for chaining
   */
  delete(user) {
    return this.client.invokeCommand(new DeleteUser(user));
  }
}

module.exports = Users;
