import React from 'react';
import PropTypes from 'prop-types';

import { ButtonEdit } from '/imports/core/ui/atoms';

const ParticipantTableItem = ({ participant, edit }) => (
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
    <td>
      {participant.country}
    </td>
    <td>
      {participant.city}
    </td>
    <td>
      <ButtonEdit edit={edit} />
    </td>
  </tr>
);

ParticipantTableItem.propTypes = {
  participant: PropTypes.object,
  edit: PropTypes.func,
};

export default ParticipantTableItem;
