import SimpleSchema from 'simpl-schema';
import { CoreSchema } from 'meteor/core';

import { GROUPS } from '/imports/participant/api/dictionaries';

const ParticipantSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  number: {
    type: String,
    label: 'Number',
  },
  group: {
    type: String,
    label: 'Group',
    allowedValues: GROUPS.keys(),
  },
  country: {
    type: String,
    label: 'Country',
    optional: true,
  },
  city: {
    type: String,
    label: 'City',
    optional: true,
  },
});

ParticipantSchema.extend(CoreSchema);

export default ParticipantSchema;
