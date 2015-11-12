'use strict';

let expect         = require('chai').expect;
let RandomizedTime = require('../../lib/TimePattern/RandomizedTime');

describe('TimePattern/RandomizedTime', () => {
  describe('constructor', () => {
    it('should set arguments', () => {
      let schedule = new RandomizedTime('2015-01-02 13:05:20', 12318);

      expect(schedule.date).to.equal('2015-01-02 13:05:20');
      expect(schedule.withinSeconds).to.equal(12318);
    });
  });

  describe('toString', () => {
    it('should be expected format', () => {
      let schedule = new RandomizedTime('2015-01-02 13:05:20', 12318);

      expect(String(schedule)).to.equal('2015-01-02T13:05:20A03:25:18');
    });
  });
});
