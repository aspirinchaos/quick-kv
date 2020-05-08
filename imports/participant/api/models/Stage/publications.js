import Stages from './collection';
import Files from '../File';
import Participants from '../Participant';
import Scores from '../Score';

Stages.publications.all.publish(function () {
  return [
    Stages.find(),
    Files.find().cursor,
  ];
});

Stages.publications.judging.publish(function () {
  return {
    find() {
      return Stages.find({ active: true });
    },
    children: [
      {
        find(stage) {
          const $in = stage.participants.map(({ _idFile }) => _idFile);
          return Files.find({ _id: { $in } }).cursor;
        },
      },
      {
        find(stage) {
          const $in = stage.participants.map(({ _idParticipant }) => _idParticipant);
          return Participants.find({ _id: { $in } });
        },
      },
      {
        find(stage) {
          return Scores.find({ _idStage: stage._id });
        },
      },
    ],
  };
}, true);
