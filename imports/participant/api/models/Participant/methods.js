import { check } from 'meteor/check';

import { Error, AdminMethoder } from '/imports/core';

import Participants from './collection';
import ParticipantFiles from '../File';

Participants.methods.insert = AdminMethoder({
  name: `${Participants._name}.insert`,
  validate(data) {
    check(data, Object);
  },
  run(data) {
    return Participants.insert(data);
  },
});

Participants.methods.update = AdminMethoder({
  name: `${Participants._name}.update`,
  validate({ _id, data }) {
    check(_id, String);
    check(data, Object);
  },
  run({ _id, data: $set }) {
    return Participants.update(_id, { $set });
  },
});

Participants.methods.remove = AdminMethoder({
  name: `${Participants._name}.remove`,
  validate(_id) {
    check(_id, String);
    if (Meteor.isServer && !Participants.exists(_id)) {
      throw new Error();
    }
  },
  run(_id) {
    if (Meteor.isServer) {
      const doc = Participants.findOne(_id);
      ParticipantFiles.remove(doc.file_id);
      return Participants.remove(_id);
    }
  },
});
