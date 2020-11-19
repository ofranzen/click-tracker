import { Meteor } from 'meteor/meteor';
import { Clicks } from '/imports/api/clicks';
import { LinksCollection } from '/imports/api/links';

Meteor.startup(() => {
  if (Clicks.find().count() === 0) {
      Clicks.insert({totalClicks : 0});
    }
});