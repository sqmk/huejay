'use strict';

const axios = require('axios');
const qs = require('querystring');
const HuejayError = require('./Error');

const DEFAULT_CONFIG = {
  clientId: undefined,
  clientSecret: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  accessTokenExpiryDate: undefined,
  refreshTokenExpiryDate: undefined
};

/**
 * OAuthToken
 *
 * Stores an OAuthToken to use when
 * querying the remote API.
 */
class OAuthToken {
  /**
   * Constructor
   *
   * @param {Object} config Configuration
   */
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config);
  }

  _expiresInSecondsToDate(seconds) {
    return new Date(new Date().getTime() + Number(seconds) * 1000);
  }

  _setTokenFromResponse(data) {
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;

    this.accessTokenExpiryDate = this._expiresInSecondsToDate(data.access_token_expires_in);
    this.refreshTokenExpiryDate = this._expiresInSecondsToDate(data.refresh_token_expires_in);
  }

  toJSON() {
    return this.config;
  }

  async refresh() {
    try {
      const res = await axios.post(
        'https://api.meethue.com/oauth2/refresh',
        qs.stringify({
          refresh_token: this.config.refreshToken
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          auth: {
            username: this.config.clientId,
            password: this.config.clientSecret
          },
          params: {
            grant_type: 'refresh_token'
          }
        }
      );

      this._setTokenFromResponse(res.data);

      return this;
    } catch (error) {
      throw new HuejayError({
        message: error.message
      });
    }
  }

  async getByCode(code) {
    try {
      const res = await axios.post(
        'https://api.meethue.com/oauth2/token', {},
        {
          auth: {
            username: this.config.clientId,
            password: this.config.clientSecret
          },
          params: {
            grant_type: 'authorization_code',
            code
          }
        }
      );

      this._setTokenFromResponse(res.data);

      return this;
    } catch (error) {
      throw new HuejayError({
        message: error.message
      });
    }
  }

  get clientId() {
    return this.config.clientId;
  }

  set clientId(clientId) {
    this.config.clientId = String(clientId);
  }

  get clientSecret() {
    return this.config.clientSecret;
  }

  set clientSecret(clientSecret) {
    this.config.clientSecret = String(clientSecret);
  }

  get accessToken() {
    return this.config.accessToken;
  }

  set accessToken(token) {
    this.config.accessToken = String(token);
  }

  get refreshToken() {
    return this.config.refreshToken;
  }

  set refreshToken(token) {
    this.config.refreshToken = String(token);
  }

  get accessTokenExpiryDate() {
    return this.config.accessTokenExpiryDate;
  }

  set accessTokenExpiryDate(date) {
    this.config.accessTokenExpiryDate = new Date(date);
  }

  get refreshTokenExpiryDate() {
    return this.config.refreshTokenExpiryDate;
  }

  set refreshTokenExpiryDate(date) {
    this.config.refreshTokenExpiryDate = new Date(date);
  }
}

module.exports = OAuthToken;
