'use strict';

let AbstractCapabilityModel = require('./AbstractCapabilityModel');

/**
 * Scenes capability model
 */
class Scenes extends AbstractCapabilityModel {
    /**
     * Get light states available
     * 
     * @params {int} Available
     */
    get lightStatesAvailable() {
        return this.details.lightstates.available;
    }
}

module.exports = Scenes;
