'use strict';

let AbstractAccessor = require('./AbstractAccessor');

// Commands
let GetSoftwareUpdate          = require('../Command/SoftwareUpdate/GetSoftwareUpdate');
let CheckForSoftwareUpdates    = require('../Command/SoftwareUpdate/CheckForSoftwareUpdates');
let InstallSoftwareUpdates     = require('../Command/SoftwareUpdate/InstallSoftwareUpdates');
let DisableInstallNotification = require('../Command/SoftwareUpdate/DisableInstallNotification');

/**
 * Software update accessor
 */
class SoftwareUpdate extends AbstractAccessor {
  /**
   * Get software update
   *
   * @return {Promise} Promise for chaining
   */
  get() {
    return this.client.invokeCommand(new GetSoftwareUpdate);
  }

  /**
   * Check for updates
   *
   * @return {Promise} Promise for chaining
   */
  check() {
    return this.client.invokeCommand(new CheckForSoftwareUpdates);
  }

  /**
   * Install updates
   *
   * @return {Promise} Promise for chaining
   */
  install() {
    return this.client.invokeCommand(new InstallSoftwareUpdates);
  }

  /**
   * Disable install notification
   *
   * @return {Promise} Promise for chaining
   */
  disableInstallNotification() {
    return this.client.invokeCommand(new DisableInstallNotification);
  }
}

module.exports = SoftwareUpdate;
