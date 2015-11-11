'use strict';

let expect = require('chai').expect;
let Timer  = require('../../lib/TimePattern/Timer');

describe('TimePattern/Timer', () => {
  describe('constructor', () => {
    it('should accept seconds argument', () => {
      let schedule = new Timer(10);

      expect(schedule).to.have.property('seconds');
      expect(schedule.seconds).to.equal(10);
      expect(schedule.repeat).to.equal(null);
    });

    it('should accept seconds and repeat arguments', () => {
      let schedule = new Timer(56, 3);

      expect(schedule.seconds).to.equal(56);
      expect(schedule).to.have.property('repeat');
      expect(schedule.repeat).to.equal(3);
    });
  });

  describe('toString', () => {
    it('should be expected format with seconds', () => {
      let schedule = new Timer(65321);

      expect(String(schedule)).to.equal('P18:08:41');
    });

    it('should be expected format with seconds and repeat', () => {
      let schedule = new Timer(12350, 24);

      expect(String(schedule)).to.equal('R24/P03:25:50');
    });
  });
});
