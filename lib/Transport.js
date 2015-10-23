'use strict';

let request = require('request');
let path    = require('path');
let Error   = require('./Error');

/**
 * Transport
 *
 * Response for making requests to Philips Hue API
 */
class Transport {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Send request
   *
   * @param {Object} options Options for request
   *
   * @return {Promise} Promise for chaining
   */
  sendRequest(options) {
    options = Object.assign(
      {
        host:   'http://' + this.client.host,
        method: 'GET',
        path:   '',
        query:  {},
        body:   {}
      },
      options
    );

    // Wrap request in a promise
    return new Promise(
      (resolve, reject) => {
        request(
          {
            method: options.method,
            uri:    options.host + path.join('/', options.path),
            qs:     options.query,
            headers: {
              'Content-Type': 'application/json'
            },
            form:   JSON.stringify(options.body)
          },
          (error, response, body) => {
            return this.handleResponse(resolve, reject, error, response, body);
          }
        );
      }
    );
  }

  /**
   * Handle response
   *
   * @param {Function} resolve  Resolve for promise
   * @param {Function} reject   Reject for promise
   * @param {mixed}    error    Request error if available
   * @param {mixed}    response Response details
   * @param {mixed}    body     Response body
   *
   * @return {mixed} Result within resolve/reject
   */
  handleResponse(resolve, reject, error, response, body) {
    if (error) {
      return reject(
        new Error('Failed to make the request: ' + error)
      );
    }

    let statusCode  = response.statusCode;
    let contentType = response.headers['content-type'];

    // Reject if neither 200 or json result
    if (statusCode !== 200 || contentType !== 'application/json') {
      return reject(
        new Error('Connection failure')
      );
    }

    let result = JSON.parse(body);

    // Use first array index if available
    if (result[0] !== undefined) {
      result = result[0];
    }

    // Reject if an error is returned
    if (result.error !== undefined) {
      return reject(
        new Error({
          type:        result.error.type,
          description: result.error.description
        })
      );
    }

    // Use value returned in success if available
    if (result.success !== undefined) {
      result = result.success;
    }

    return resolve(result);
  }
}

module.exports = Transport;
