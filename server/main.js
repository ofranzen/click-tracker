import { Meteor } from 'meteor/meteor';
import { ClicksCollection } from '/imports/api/ClicksCollection';
import { LinksCollection } from '/imports/api/links';

Meteor.startup(() => {
  if (ClicksCollection.find().count() === 0) {
      ClicksCollection.insert({totalClicks : 0});
    }
});