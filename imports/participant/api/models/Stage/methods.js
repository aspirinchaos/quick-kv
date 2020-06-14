import { check } from 'meteor/check';

import { Error, AdminMethoder, JudgeMethoder } from '/imports/core';

import Stages from './collection';
import Files from '../File';
import Scores from '../Score';

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

Stages.methods.removeParticipant = AdminMethoder({
  name: `${Stages._name}.remove-participant`,
  validate({ _id, _idParticipant }) {
    check(_id, String);
    check(_idParticipant, String);
  },
  run({ _id, _idParticipant }) {
    if (Meteor.isServer) {
      const stage = Stages.findOne(_id);
      const part = stage.participants.find((x) => x._idParticipant === _idParticipant);
      Files.remove(part._idFile);
      Scores.remove({ _idStage: _id, _idParticipant });
      return Stages.update(_id, { $pull: { participants: part } });
    }
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
