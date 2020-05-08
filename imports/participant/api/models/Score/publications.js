import { check } from 'meteor/check';

import Scores from './collection';

Scores.publications.stage.publish(function (_idStage) {
  check(_idStage, String);
  return Scores.find({ _idStage });
});
