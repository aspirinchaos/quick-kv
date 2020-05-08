import { Collection } from '/imports/core';
import { AdminPublisher } from '/imports/core/api/publisher';
import { Users } from '/imports/user';

import Score from './document';
import Schema from './schema';

const Scores = new Collection('Score', Score, Schema);

Scores.publications.stage = new AdminPublisher(`${Scores._name}.stage`);

Scores.getScore = (_idParticipant, _idStage) => Scores.findOne({
  _idParticipant,
  _idStage,
  _idJudge: Users.userId(),
});

export { Scores as default };
