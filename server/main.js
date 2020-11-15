import { Meteor } from 'meteor/meteor';
import { ClicksCollection } from '/imports/api/ClicksCollection';

Meteor.startup(() => {
  if (ClicksCollection.find().count() === 0) {
      ClicksCollection.insert({totalClicks : 0});
    }
});