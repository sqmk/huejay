'use strict';

let GetUser = require('./GetUser');
let Utils   = require('./Utils');

/**
 * Create user command
 *
 * Create a user
 */
class CreateUser {
  /**
   * Constructor
   *
   * @param {User} user User
   */
  constructor(user) {
    Utils.validateUser(user);

    this.user = user;
  }

  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      method: 'POST',
      url:    'api',
      data: {
        'devicetype': this.user.deviceType
      }
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.user.attributes.set('username', result.username);

        return this.user;
      });
  }
}

module.exports = CreateUser;
