import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Match } from 'meteor/check'
import { check } from 'meteor/check';

export const Clicks = new Mongo.Collection('clicks');

Meteor.methods({
  'clicks.increment'(clickId, totalClicks) {
    check(clickId, String);
    //TODO Make check work. totalClicks is an object so Match.Integer fails.
    //check(totalClicks, Match.Integer);

    Clicks.update(clickId, { $inc: { totalClicks: 1 } });
  },
});
