'use strict';

let expect = require('chai').expect;
let Huejay = require('../lib/Huejay');

describe('Huejay', () => {
  describe('version property', () => {
    it('should be a string', () => {
      expect(Huejay).to.have.property('version');
      expect(Huejay.version).to.be.a('string');
    });
  });

  describe('discover property', () => {
    it('should be a function', () => {
      expect(Huejay).to.have.property('discover');
      expect(Huejay.discover).to.be.a('function');
    });
  });

  describe('Client property', () => {
    it('should be a function', () => {
      expect(Huejay).to.have.property('Client');
      expect(Huejay.Client).to.be.a('function');
    });
  });

  describe('Error property', () => {
    it('should be a function', () => {
      expect(Huejay).to.have.property('Error');
      expect(Huejay.Error).to.be.a('function');
    });
  });
});
