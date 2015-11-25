'use strict';

let expect        = require('chai').expect;
let RecurringTime = require('../../lib/TimePattern/RecurringTime');

describe('TimePattern/RecurringTime', () => {
  it('should have weekday constants', () => {
    expect(RecurringTime).to.have.property('WEDNESDAY');
  });

  describe('constructor', () => {
    it('should set arguments', () => {
      let schedule = new RecurringTime(RecurringTime.MONDAY|RecurringTime.WEEKEND, '13:04:02');

      expect(schedule.daysOfWeek).to.equal(67);
      expect(schedule.timeOfDay).to.equal('13:04:02');
    });
  });

  describe('toString', () => {
    it('should be expected format', () => {
      let schedule = new RecurringTime(RecurringTime.WEEKEND, '23:02:03');

      expect(String(schedule)).to.equal('W3/T23:02:03');
    });
  });
});
