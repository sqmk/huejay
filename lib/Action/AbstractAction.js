'use strict';

let Error = require('../Error');

/**
 * Abstract action
 */
class AbstractAction {
  /**
   * Export action
   */
  exportAction() {
    throw new Error({
      message: 'Action must define exportAction'
    });
  }
}

module.exports = AbstractAction;
