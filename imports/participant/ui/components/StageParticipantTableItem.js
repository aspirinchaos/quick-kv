import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';

import { Files, Participants, Scores } from '/imports/participant';

import { ButtonLink } from '/imports/core/ui/atoms';

const StageParticipantTableItem = ({ _idStage, participant: { _idParticipant, _idFile }, view }) => {
  const part = Participants.findOne(_idParticipant);
  const file = Files.findOne(_idFile);

  const votes = useTracker(() => Scores.find({ _idParticipant, _idStage }).fetch(), []);

  const score = votes.reduce((sum, vote) => sum + vote.value, 0) / votes.length;

  return (
    <tr>
      <td>
        {part.name}
      </td>
      <td>
        <ButtonLink onClick={view}>
          {file.name}
        </ButtonLink>
      </td>
      <td>
        {votes.length}
      </td>
      <td>
        {score.toFixed(3)}
      </td>
    </tr>
  );
};

StageParticipantTableItem.propTypes = {
  _idStage: PropTypes.string,
  participant: PropTypes.object,
  view: PropTypes.func,
};

export default StageParticipantTableItem;
