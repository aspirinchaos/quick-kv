import SimpleSchema from 'simpl-schema';
import { CoreSchema } from 'meteor/core';


const ScoreSchema = new SimpleSchema({
  value: {
    type: Number,
    label: 'Value',
  },
  _idJudge: {
    type: String,
    label: 'Adjudicator',
  },
  _idParticipant: {
    type: String,
    label: 'Participant',
  },
  _idStage: {
    type: String,
    label: 'Stage',
  },
});

ScoreSchema.extend(CoreSchema);

export default ScoreSchema;
