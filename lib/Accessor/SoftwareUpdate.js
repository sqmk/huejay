'use strict';

let AbstractAccessor = require('./AbstractAccessor');

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
    let GetSoftwareUpdate = require('../Command/SoftwareUpdate/GetSoftwareUpdate');

    return this.client.invokeCommand(new GetSoftwareUpdate);
  }

  /**
   * Check for updates
   *
   * @return {Promise} Promise for chaining
   */
  check() {
    let CheckForSoftwareUpdates = require('../Command/SoftwareUpdate/CheckForSoftwareUpdates');

    return this.client.invokeCommand(new CheckForSoftwareUpdates);
  }

  /**
   * Install updates
   *
   * @return {Promise} Promise for chaining
   */
  install() {
    let InstallSoftwareUpdates = require('../Command/SoftwareUpdate/InstallSoftwareUpdates');

    return this.client.invokeCommand(new InstallSoftwareUpdates);
  }

  /**
   * Disable install notification
   *
   * @return {Promise} Promise for chaining
   */
  disableInstallNotification() {
    let DisableInstallNotification = require('../Command/SoftwareUpdate/DisableInstallNotification');

    return this.client.invokeCommand(new DisableInstallNotification);
  }
}

module.exports = SoftwareUpdate;
