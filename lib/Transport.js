'use strict';

let axios       = require('axios');
let path        = require('path');
let HuejayError = require('./Error');

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
   * Get HTTP client
   *
   * @return {mixed} Axios http client
   */
  getHttpClient() {
    let httpClient = axios.create({
      baseURL: `http://${this.client.host}:${this.client.port}/`,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: this.client.timeout,
      transformRequest: [
        (data) => {
          return JSON.stringify(data);
        }
      ],
      responseType: 'json',
    });

    return httpClient;
  }

  /**
   * Send request
   *
   * @param {Object} options Options for request
   *
   * @return {Promise} Promise for chaining
   */
  sendRequest(options) {
    return this.getHttpClient()
      .request(options)
      .then(response => {
        let result = response.data;

        // Return response data immediately if raw data is expected
        if (!!options.raw) {
          return result;
        }

        // Return multiple results if expected
        if (!!options.multi) {
          let results = {};

          for (let i in result) {
            if (result[i].error !== undefined) {
              throw new HuejayError({
                type:    result[i].error.type,
                message: result[i].error.description,
              });
            }

            Object.assign(results, result[i].success);
          }

          return results;
        }

        // Use first array index if available
        if (result[0] !== undefined) {
          result = result[0];
        }

        // Reject if an error is returned
        if (result.error !== undefined) {
          throw new HuejayError({
            type:    result.error.type,
            message: result.error.description,
          });
        }

        // Narrow down to success if available
        if (result.success !== undefined) {
          result = result.success;
        }

        return result;
      })
      .catch(error => {
        if (error instanceof HuejayError) {
          throw error;
        }

        throw new HuejayError({
          message: error.message
        });
      });
  }
}

module.exports = Transport;
