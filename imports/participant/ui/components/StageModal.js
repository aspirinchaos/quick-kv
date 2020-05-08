import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { Stages } from '/imports/participant';

import { Toastr } from '/imports/core/ui/atoms';
import StageForm from './StageForm';

const StageModal = ({ stage, clear }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (stage) {
      setOpen(true);
    }
  }, [stage]);

  const form = useRef(null);

  const close = () => {
    setOpen(false);
    clear();
  };

  const save = () => {
    form.current.dispatchEvent(new Event('submit'));
  };

  const onSubmit = (data) => {
    Stages.methods.insert(data).then(() => {
      Toastr.success('Stage was added');
      close();
    }).catch((error) => {
      Toastr.error(error.reason);
    });
  };

  if (!stage) {
    return <></>;
  }

  return (
    <Modal size={'lg'} isOpen={isOpen} toggle={close}>
      <ModalHeader toggle={close}>Adding stage</ModalHeader>
      <ModalBody>
        <StageForm
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

StageModal.propTypes = {
  stage: PropTypes.object,
  clear: PropTypes.func,
};

export default StageModal;
