import { Collection } from '/imports/core';
import { Users } from '/imports/user';

import Score from './document';
import Schema from './schema';

const Scores = new Collection('Score', Score, Schema);

Scores.getScore = (_idParticipant, _idStage) => Scores.findOne({
  _idParticipant,
  _idStage,
  _idJudge: Users.userId(),
});

export { Scores as default };
