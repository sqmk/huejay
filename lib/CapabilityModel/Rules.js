'use strict';

let AbstractCapabilityModel = require('./AbstractCapabilityModel');

/**
 * Rules capability model
 */
class Rules extends AbstractCapabilityModel {
    /**
     * Get conditions available
     * 
     * @params {int} Available
     */
    get conditionsAvailable() {
        return this.details.conditions.available;
    }

    /**
     * Get actions available
     * 
     * @params {int} Available
     */
    get actionsAvailable() {
        return this.details.actions.available;
    }
}

module.exports = Rules;
