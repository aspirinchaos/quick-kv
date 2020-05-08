import { Document } from '/imports/core';
import { GROUPS } from '/imports/participant/api/dictionaries';

class ParticipantClass extends Document {
  get groupTitle() {
    return GROUPS[this.group].title;
  }
}

export default ParticipantClass;
