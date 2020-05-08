import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { Participants } from '/imports/participant';

import { Toastr } from '/imports/core/ui/atoms';
import ParticipantForm from './ParticipantForm';

const ParticipantModal = ({ participant, clear }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (participant) {
      setOpen(true);
    }
  }, [participant]);

  const form = useRef(null);

  const close = () => {
    setOpen(false);
    clear();
  };

  const save = () => {
    form.current.dispatchEvent(new Event('submit'));
  };

  const onSubmit = (data) => {
    Participants.methods.insert(data).then(() => {
      Toastr.success('Participant was added');
      close();
    }).catch((error) => {
      Toastr.error(error.reason);
    });
  };

  if (!participant) {
    return <></>;
  }

  return (
    <Modal size={'lg'} isOpen={isOpen} toggle={close}>
      <ModalHeader toggle={close}>Adding participant</ModalHeader>
      <ModalBody>
        <ParticipantForm
          formRef={form}
          participant={participant}
          onSubmit={onSubmit}
        />
      </ModalBody>
      <ModalFooter>
        <Button color={'primary'} onClick={save}>Add</Button>
        <Button color={'secondary'} onClick={close}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

ParticipantModal.propTypes = {
  participant: PropTypes.object,
  clear: PropTypes.func,
};

export default ParticipantModal;
