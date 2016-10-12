'use strict';

let AbstractCapabilityModel = require('./AbstractCapabilityModel');

/**
 * Sensors capability model
 */
class Sensors extends AbstractCapabilityModel {
    /**
     * Get clip available
     * 
     * @params {int} Available
     */
    get clipAvailable() {
        return this.details.clip.available;
    }

    /**
     * Get zll available
     * 
     * @params {int} Available
     */
    get zllAvailable() {
        return this.details.zll.available;
    }

    /**
     * Get zgps available
     * 
     * @params {int} Available
     */
    get zgpAvailable() {
        return this.details.zgp.available;
    }
}

module.exports = Sensors;
