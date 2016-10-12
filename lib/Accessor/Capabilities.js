'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Commands
let GetLights        = require('../Command/Capability/GetLights');
let GetSensors       = require('../Command/Capability/GetSensors');
let GetGroups        = require('../Command/Capability/GetGroups');
let GetScenes        = require('../Command/Capability/GetScenes');
let GetSchedules     = require('../Command/Capability/GetSchedules');
let GetRules         = require('../Command/Capability/GetRules');
let GetResourceLinks = require('../Command/Capability/GetResourceLinks');
let GetTimeZones     = require('../Command/Capability/GetTimeZones');

/**
 * Capabilities accessor
 */
class Capabilities extends AbstractAccessor {
  /**
   * Get light capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  lights() {
    return this.client.invokeCommand(new GetLights);
  }

  /**
   * Get sensor capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  sensors() {
    return this.client.invokeCommand(new GetSensors);
  }

  /**
   * Get group capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  groups() {
    return this.client.invokeCommand(new GetGroups);
  }

  /**
   * Get scene capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  scenes() {
    return this.client.invokeCommand(new GetScenes);
  }

  /**
   * Get rule capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  rules() {
    return this.client.invokeCommand(new GetRules);
  }

  /**
   * Get resource links capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  resourceLinks() {
    return this.client.invokeCommand(new GetResourceLinks);
  }

  /**
   * Get schedule capabilities
   * 
   * @return {Promise} Promise for chaining
   */
  schedules() {
    return this.client.invokeCommand(new GetSchedules);
  }

  /**
   * Get time zones
   *
   * @return {Promise} Promise for chaining
   */
  getTimeZones() {
    return this.client.invokeCommand(new GetTimeZones);
  }
}

module.exports = Capabilities;
