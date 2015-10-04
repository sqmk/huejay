'use strict';

let expect    = require('chai').expect;
let Discovery = require('../lib/Discovery');

describe('Discovery', () => {
  beforeEach(() => {
    this.discovery = new Discovery;
  });

  describe('constructor', () => {
    it('should set options', () => {
      expect(this.discovery).to.have.property('options');
    });
  });
});
