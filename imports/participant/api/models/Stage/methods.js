import { check } from 'meteor/check';

import { Error, AdminMethoder, JudgeMethoder } from '/imports/core';

import Stages from './collection';
import StageFiles from '../File';

Stages.methods.insert = AdminMethoder({
  name: `${Stages._name}.insert`,
  validate(data) {
    check(data, Object);
  },
  run(data) {
    return Stages.insert(data);
  },
});

Stages.methods.activate = AdminMethoder({
  name: `${Stages._name}.activate`,
  validate(_id) {
    check(_id, String);
  },
  run(_id) {
    const stage = Stages.findOne(_id);
    Stages.update({}, { $set: { active: false } }, { multi: true });
    if (!stage.active) {
      Stages.update(_id, { $set: { active: true } });
    }
  },
});

Stages.methods.addParticipant = AdminMethoder({
  name: `${Stages._name}.add-participant`,
  validate({ _id, _idFile, _idParticipant }) {
    check(_id, String);
    check(_idFile, String);
    check(_idParticipant, String);
  },
  run({ _id, _idFile, _idParticipant }) {
    return Stages.update(_id, { $push: { participants: { _idFile, _idParticipant } } });
  },
});

Stages.methods.voting = JudgeMethoder({
  name: `${Stages._name}.voting`,
  validate({ _id, _idParticipant }) {
    check(_id, String);
    check(_idParticipant, String);
  },
  run({ _id, _idParticipant }) {


    return Stages.update(_id, { $push: { participants: { _idFile, _idParticipant } } });
  },
});

Stages.methods.update = AdminMethoder({
  name: `${Stages._name}.update`,
  validate({ _id, data }) {
    check(_id, String);
    check(data, Object);
  },
  run({ _id, data: $set }) {
    return Stages.update(_id, { $set });
  },
});

Stages.methods.remove = AdminMethoder({
  name: `${Stages._name}.remove`,
  validate(_id) {
    check(_id, String);
    if (Meteor.isServer && !Stages.exists(_id)) {
      throw new Error();
    }
  },
  run(_id) {
    if (Meteor.isServer) {
      const doc = Stages.findOne(_id);
      StageFiles.remove(doc.file_id);
      return Stages.remove(_id);
    }
  },
});
