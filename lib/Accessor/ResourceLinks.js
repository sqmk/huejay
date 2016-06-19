'use strict';

let AbstractAccessor = require('./AbstractAccessor');
let ResourceLink     = require('../Model/ResourceLink');

// Commands
let GetResourceLinks   = require('../Command/ResourceLinks/GetResourceLinks');
let GetResourceLink    = require('../Command/ResourceLinks/GetResourceLink');
let CreateResourceLink = require('../Command/ResourceLinks/CreateResourceLink');
let SaveResourceLink   = require('../Command/ResourceLinks/SaveResourceLink');
let DeleteResourceLink = require('../Command/ResourceLinks/DeleteResourceLink');

/**
 * Resource links accessor
 */
class ResourceLinks extends AbstractAccessor {
  /**
   * Constructor
   *
   * @param {Client} client Client
   */
  constructor(client) {
    super(client);

    this.ResourceLink = ResourceLink;
  }

  /**
   * Get resource links
   *
   * @return {Promise} Promise for chaining
   */
  getAll() {
    return this.client.invokeCommand(new GetResourceLinks);
  }

  /**
   * Get resource link by id
   *
   * @param {string} id Resource Link Id
   *
   * @return {Promise} Promise for chaining
   */
  getById(id) {
    return this.client.invokeCommand(new GetResourceLink(id));
  }

  /**
   * Create resource link
   *
   * @param {ResourceLink} resourceLink Resource Link
   *
   * @return {Promise} Promise for chaining
   */
  create(resourceLink) {
    return this.client.invokeCommand(new CreateResourceLink(resourceLink));
  }

  /**
   * Save resource link
   *
   * @param {ResourceLink} resourceLink Resource Link
   *
   * @return {Promise} Promise for chaining
   */
  save(resourceLink) {
    return this.client.invokeCommand(new SaveResourceLink(resourceLink));
  }

  /**
   * Delete resource link
   *
   * @param {ResourceLink} resourceLink Resource Link object or resource link Id
   *
   * @return {Promise} Promise for chaining
   */
  delete(resourceLink) {
    return this.client.invokeCommand(new DeleteResourceLink(resourceLink));
  }
}

module.exports = ResourceLinks;
