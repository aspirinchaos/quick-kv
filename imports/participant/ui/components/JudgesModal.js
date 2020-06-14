import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { Users } from '/imports/user';

const JudgesModal = ({ judges, clear }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (judges) {
      setOpen(true);
    }
  }, [judges]);

  const close = () => {
    setOpen(false);
    clear();
  };

  if (!judges) {
    return <></>;
  }

  const allJudges = Users.getJudges();

  return (
    <Modal isOpen={isOpen} toggle={close}>
      <ModalHeader toggle={close}>Voted adjudicators</ModalHeader>
      <ListGroup flush>
        {allJudges.map((judge) => (
          <ListGroupItem key={judge._id} active={judges.includes(judge._id)}>
            {judge ? judge.profile.name : 'No-name'}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Modal>
  );
};

JudgesModal.propTypes = {
  judges: PropTypes.array,
  clear: PropTypes.func,
};

export default JudgesModal;
