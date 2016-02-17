'use strict';

let expect       = require('chai').expect;
let AbsoluteTime = require('../../lib/TimePattern/AbsoluteTime');

describe('TimePattern/AbsoluteTime', () => {
  describe('constructor', () => {
    it('should set arguments', () => {
      let schedule = new AbsoluteTime('2016-03-13 19:24:01');

      expect(schedule.date).to.equal('2016-03-13 19:24:01');
    });
  });

  describe('toString', () => {
    it('should be expected format', () => {
      let schedule = new AbsoluteTime('2016-03-13 19:24:01');

      expect(String(schedule)).to.equal('2016-03-13T19:24:01');
    });
  });
});
