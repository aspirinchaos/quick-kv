import { check } from 'meteor/check';

import { JudgeMethoder } from '/imports/core';

import Scores from './collection';

Scores.methods.insert = JudgeMethoder({
  name: `${Scores._name}.insert`,
  validate(data) {
    check(data, Object);
  },
  run(data) {
    data._idJudge = this.userId;
    return Scores.insert(data);
  },
});
