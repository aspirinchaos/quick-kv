import { Collection } from '/imports/core';
import { JudgePublisher, AdminPublisher } from '/imports/core/api/publisher';

import Stage from './document';
import Schema from './schema';

const Stages = new Collection('Stage', Stage, Schema);

Stages.publications.all = new AdminPublisher(`${Stages._name}.all`);
Stages.publications.judging = new JudgePublisher(`${Stages._name}.judging`);

export { Stages as default };
