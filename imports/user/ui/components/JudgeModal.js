import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { Users } from '/imports/user';

import { Toastr } from '/imports/core/ui/atoms';
import JudgeForm from './JudgeForm';

const JudgeModal = ({ judge, clear }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (judge) {
      setOpen(true);
    }
  }, [judge]);

  const form = useRef(null);

  const close = () => {
    setOpen(false);
    clear();
  };

  const save = () => {
    form.current.dispatchEvent(new Event('submit'));
  };

  const onSubmit = (data) => {
    Users.methods.judgeInsert(data).then(() => {
      Toastr.success('Adjudicator was added');
      close();
    }).catch((error) => {
      Toastr.error(error.reason);
    });
  };

  if (!judge) {
    return <></>;
  }

  return (
    <Modal size={'lg'} isOpen={isOpen} toggle={close}>
      <ModalHeader toggle={close}>Adding adjudicator</ModalHeader>
      <ModalBody>
        <JudgeForm
          formRef={form}
          judge={judge}
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

JudgeModal.propTypes = {
  judge: PropTypes.object,
  clear: PropTypes.func,
};

export default JudgeModal;
