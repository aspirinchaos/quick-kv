import React, { useState, useEffect } from 'react';
import { Modal as ModalBs } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Files } from '/imports/participant';

import { Video } from '/imports/core/ui/atoms';

const VideoModal = ({ video, clear }) => {
  const [isOpen, setOpen] = useState(false);
  const [lg, setLg] = useState(true);

  useEffect(() => {
    if (video) {
      setOpen(true);
    }
  }, [video]);

  const close = () => {
    setOpen(false);
    clear();
    setLg(true);
  };


  if (!video) {
    return <></>;
  }

  const file = Files.findOne(video._idFile);

  return (
    <Modal size={lg ? 'lg' : 'sm'} isOpen={isOpen} toggle={close}>
      <Video setSmall={(size) => setLg(size)} src={file.link()} />
    </Modal>
  );
};

VideoModal.propTypes = {
  video: PropTypes.object,
  clear: PropTypes.func,
};

export default VideoModal;

const Modal = styled(ModalBs)`
  .modal-content {
    border: none;
    background-color: transparent;
    align-items: center;
  }
`;
