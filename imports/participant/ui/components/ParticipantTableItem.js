import React from 'react';
import PropTypes from 'prop-types';

const ParticipantTableItem = ({ participant }) => (
  <tr>
    <td>
      {participant.number}
    </td>
    <td>
      {participant.name}
    </td>
    <td>
      {participant.groupTitle}
    </td>
  </tr>
);

ParticipantTableItem.propTypes = {
  participant: PropTypes.object,
};

export default ParticipantTableItem;
