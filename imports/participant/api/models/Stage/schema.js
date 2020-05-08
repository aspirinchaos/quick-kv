import SimpleSchema from 'simpl-schema';
import { CoreSchema } from 'meteor/core';


const ParticipantSchema = new SimpleSchema({
  _idParticipant: String,
  _idFile: String,
});

const StageSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  desc: {
    type: String,
    label: 'Description',
  },
  active: {
    type: Boolean,
    defaultValue: false,
  },
  participants: {
    type: Array,
    defaultValue: [],
  },
  'participants.$': ParticipantSchema,
});

StageSchema.extend(CoreSchema);

export default StageSchema;
