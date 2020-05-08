import { Collection } from '/imports/core';
import { AdminPublisher } from '/imports/core/api/publisher';

import Participant from './document';
import Schema from './schema';

const Participants = new Collection('Participant', Participant, Schema);

Participants.publications.all = new AdminPublisher(`${Participants._name}.all`);

Participants.getForStage = ({ participants }) => {
  const $nin = participants.map((x) => x._idParticipant);
  return Participants.find({ _id: { $nin } }).map(({ _id, name, number }) => ({
    value: _id,
    title: `${name} - ${number}`,
  }));
};

export { Participants as default };
