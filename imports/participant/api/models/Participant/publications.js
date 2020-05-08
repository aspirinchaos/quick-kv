import { check } from 'meteor/check';

import Participants from './collection';
import Files from '/imports/participant/api/models/File';

Participants.publications.all.publish(function () {
  return [
    Participants.find(),
    Files.find().cursor,
  ];
});
