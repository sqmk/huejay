'use strict';

let request = require('request');
let Error   = require('../Error');

const PHILIPS_NUPNP_URL = 'https://www.meethue.com/api/nupnp';

/**
 * Nupnp discovery strategy
 *
 * Use meethue's endpoint for looking up local bridges
 */
class Nupnp {
  /**
   * Discover bridges
   *
   * @return {Promise} Promise for chaining
   */
  discover() {
    return new Promise((resolve, reject) => {
      getBridges(resolve, reject);
    });
  }
}

/**
 * Get bridges
 *
 * @param {function} resolve Promise resolve
 * @param {function} reject  Promise reject
 */
function getBridges(resolve, reject) {
  request.get(PHILIPS_NUPNP_URL, (error, response, body) => {
    if (error) {
      return reject(error);
    }

    if (response.statusCode !== 200) {
      return reject(new Error({
        description: 'Failed to get results from meethue'
      }));
    }

    let foundBridges = JSON.parse(body);
    let results      = [];

    for (let bridge of foundBridges) {
      results.push({
        id: bridge.id.toUpperCase(),
        ip: bridge.internalipaddress
      });
    }

    return resolve(results);
  });
}

module.exports = Nupnp;
