'use strict';

let dgram = require('dgram');

const SSDP_ADDRESS       = '239.255.255.250';
const SSDP_PORT          = 1900;
const SSDP_SEARCH_TARGET = 'upnp:rootdevice';
const SOURCE_INTERFACE   = '0.0.0.0';
const SOURCE_PORT        = 0;
const TIMEOUT_MS         = 3000;

/**
 * Upnp discovery strategy
 *
 * Use UPnP on the local network for bridge discovery
 */
class Upnp {
  /**
   * Constructor
   */
  constructor() {
    this.bridges = [];
  }

  /**
   * Discover bridges
   *
   * @return {Promise} Promise for chaining
   */
  discover() {
    return new Promise((resolve, reject) => {
      this.startDiscovery(resolve, reject);
    });
  }

  /**
   * Start listener and broadcast UPnP search
   *
   * @param {function} resolve Promise resolve
   * @param {function} reject  Promise reject
   */
  startDiscovery(resolve, reject) {
    this.socket = dgram.createSocket('udp4');

    this.socket.on('listening', () => {
      this.broadcast();
    });

    this.socket.on('message', (message, remote) => {
      this.handleMessage(message);
    });

    this.socket.bind(SOURCE_PORT, SOURCE_INTERFACE);

    setTimeout(() => this.stopDiscovery(resolve, reject), TIMEOUT_MS);
  }

  /**
   * Use SSDP discovery broadcast
   */
  broadcast() {
    let query = new Buffer(
      [
        'M-SEARCH * HTTP/1.1',
        `HOST: ${SSDP_ADDRESS}:${SSDP_PORT}`,
        'MAN: "sddp:discover"',
        'MX: 3',
        `ST: ${SSDP_SEARCH_TARGET}`,
        ''
      ].join('\r\n')
    );

    this.socket.send(query, 0, query.length, SSDP_PORT, SSDP_ADDRESS);
  }

  /**
   * Handle incoming message
   *
   * @param {mixed} message Message received
   */
  handleMessage(message) {
    var message = message.toString();

    let match = message.match(/hue-bridgeid: (.*?)\r\n/i);
    if (!match || !(1 in match)) {
      return;
    }

    let bridgeId = match[1];
    let bridgeIp = message.match(/LOCATION: https?:\/\/([\.0-9]+).*?\r\n/i)[1];

    this.bridges[bridgeId] = {
      id: bridgeId,
      ip: bridgeIp
    };
  }

  /**
   * Stop discovery
   *
   * @param {function} resolve Promise resolve
   * @param {function} reject  Promise reject
   */
  stopDiscovery(resolve, reject) {
    this.socket.close(
      () => resolve(
        Object.keys(this.bridges).map(key => this.bridges[key])
      )
    );
  }
}

module.exports = Upnp;
