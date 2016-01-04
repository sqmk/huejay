'use strict';

let axios = require('axios');
let Error = require('../Error');

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
    return this.requestService();
  }

  /**
   * Request service
   *
   * @return {Promise} Promise for chaining
   */
  requestService() {
    let httpRequest = axios.get(PHILIPS_NUPNP_URL, {
      responseType: 'json'
    });

    return httpRequest
      .then(response => {
        return response.data.map(bridge => {
          return {
            id: bridge.id.toUpperCase(),
            ip: bridge.internalipaddress,
          };
        });
      })
      .catch(response => {
        throw new Error({
          message: 'Failed to get results from meethue'
        });
      });
  }
}

module.exports = Nupnp;
