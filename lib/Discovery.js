'use strict';

let Error = require('./Error');

const ENABLED_STRATEGIES = {
  nupnp: 'Nupnp',
  upnp:  'Upnp',
};

const DEFAULT_OPTIONS = {
  strategy: 'all'
};

/**
 * Discovery
 *
 * Assists in finding bridges on local network
 */
class Discovery {
  /**
   * Constructor
   *
   * @param {object} options Options
   */
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }

  /**
   * Convenience method for discovering bridges
   *
   * @param {object} options Options
   *
   * @return {Promise} Promise for chaining
   */
  static discoverBridges(options) {
    return (new Discovery(options)).discover();
  }

  /**
   * Invokes bridge discovery
   *
   * @return {Promise} Promise for chaining
   */
  discover() {
    let strategies = [];

    let selectedStrategies = (this.options['strategy'] === 'all')
      ? Object.keys(ENABLED_STRATEGIES)
      : [this.options['strategy']];

    for (let strategy of selectedStrategies) {
      strategies.push(getDiscoveryStrategy(strategy));
    }

    return Promise.all(strategies.map(strategy => strategy.discover()))
      .then(results => {
        let bridges = [];

        results.map(results => {
          results.map(bridge => {
            bridges[bridge.id] = bridge;
          });
        });

        return Object.keys(bridges).map(key => bridges[key]);
      });
  }
}

/**
 * Validate discovery strategy
 *
 * @param {string} strategy Strategy
 */
function validateDiscoveryStrategy(strategy) {
  if (!(strategy in ENABLED_STRATEGIES)) {
    throw new Error({
      message: `Discovery strategy ${strategy} not valid`
    });
  }
}

/**
 * Get discovery strategy
 *
 * @param {string} strategy Strategy
 *
 * @return {mixed} Discovery strategy
 */
function getDiscoveryStrategy(strategy) {
  validateDiscoveryStrategy(strategy);

  let strategyClass = ENABLED_STRATEGIES[strategy];

  return new (require(`./DiscoveryStrategy/${strategyClass}`));
}

module.exports = Discovery;
