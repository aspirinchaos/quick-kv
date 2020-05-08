import { check } from 'meteor/check';

import { AdminMethoder } from '/imports/core';

import Files from './collection';

Files.methods.remove = AdminMethoder({
  name: `${Files.collectionName}.remove`,
  validate(_id) {
    check(_id, String);
  },
  run(_id) {
    if (Meteor.isServer) {
      Files.remove({ _id });
    }
  },
});
