import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const StageResultTableItem = ({ participant: { participant, score }, number, view }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{participant.name}</td>
      <td>{participant.country}</td>
      <td>{participant.city}</td>
      <td>{score.toFixed(3)}</td>
      <td width={'100px'}>
        <Button color={'primary'} onClick={view}>
          Video
        </Button>
      </td>
    </tr>
  );
};

StageResultTableItem.propTypes = {
  participant: PropTypes.object,
  number: PropTypes.number,
  view: PropTypes.func,
};

export default StageResultTableItem;
