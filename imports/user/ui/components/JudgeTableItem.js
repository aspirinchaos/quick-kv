import React from 'react';
import PropTypes from 'prop-types';

const JudgeTableItem = ({ judge }) => (
  <tr>
    <td>
      {judge.profile.name}
    </td>
    <td>
      {judge.emails[0].address}
    </td>
    <td>
      {judge.emails[0].verified ? 'Yes' : 'No'}
    </td>
  </tr>
);

JudgeTableItem.propTypes = {
  judge: PropTypes.object,
};

export default JudgeTableItem;
