import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { Stages } from '/imports/participant';

import { Toastr } from '/imports/core/ui/atoms';
import StageParticipantForm from './StageParticipantForm';

const StageParticipantModal = ({ participant, stage, clear }) => {
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
    data._id = stage._id;
    Stages.methods.addParticipant(data).then(() => {
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
        <StageParticipantForm
          formRef={form}
          stage={stage}
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

StageParticipantModal.propTypes = {
  participant: PropTypes.object,
  stage: PropTypes.object,
  clear: PropTypes.func,
};

export default StageParticipantModal;
