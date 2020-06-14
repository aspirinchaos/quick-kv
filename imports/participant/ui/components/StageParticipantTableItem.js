import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';

import { Files, Participants, Scores } from '/imports/participant';

import { ButtonLink, ButtonView, ButtonRemove } from '/imports/core/ui/atoms';

const StageParticipantTableItem = ({
  _idStage,
  participant: { _idParticipant, _idFile },
  view,
  viewJudges,
  remove,
}) => {
  const part = Participants.findOne(_idParticipant);
  const file = Files.findOne(_idFile);

  const votes = useTracker(() => Scores.find({ _idParticipant, _idStage }).fetch(), []);

  const score = votes.reduce((sum, vote) => sum + vote.value, 0) / votes.length;

  const judges = votes.map((x) => x._idJudge);

  return (
    <tr>
      <td>
        {part && part.name}
      </td>
      <td>
        <ButtonLink onClick={view}>
          {file && file.name}
        </ButtonLink>
      </td>
      <td>
        {votes.length}
      </td>
      <td>
        {Number.isNaN(score) ? 'N/A' : score.toFixed(3)}
      </td>
      <td>
        <ButtonView view={() => viewJudges(judges)} />
        <ButtonRemove remove={remove} />
      </td>
    </tr>
  );
};

StageParticipantTableItem.propTypes = {
  _idStage: PropTypes.string,
  participant: PropTypes.object,
  view: PropTypes.func,
  viewJudges: PropTypes.func,
  remove: PropTypes.func,
};

export default StageParticipantTableItem;
