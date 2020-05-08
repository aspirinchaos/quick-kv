import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { StageParticipantListRoute } from '/imports/participant/api/routes';

const StageTableItem = ({ stage, activate }) => (
  <tr>
    <td>
      {stage.name}
    </td>
    <td>
      {stage.desc}
    </td>
    <td>
      {stage.active ? (
        <Button color={'danger'} onClick={activate}>
          Stop stage
        </Button>
      ) : (
        <Button color={'success'} onClick={activate}>
          Start stage
        </Button>
      )}
      <Button
        onClick={() => StageParticipantListRoute.go({ _id: stage._id })}
        className={'ml-2'}
        color={'info'}
      >
        Participants
      </Button>
    </td>
  </tr>
);

StageTableItem.propTypes = {
  stage: PropTypes.object,
  activate: PropTypes.func,
};

export default StageTableItem;
