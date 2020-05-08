import React, { useState, useEffect } from 'react';
import { Modal } from 'reactstrap';
import PropTypes from 'prop-types';

import { Files } from '/imports/participant';

import { Video } from '/imports/core/ui/atoms';

const VideoModal = ({ video, clear }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (video) {
      setOpen(true);
    }
  }, [video]);

  const close = () => {
    setOpen(false);
    clear();
  };


  if (!video) {
    return <></>;
  }

  const file = Files.findOne(video._idFile);

  return (
    <Modal size={'lg'} isOpen={isOpen} toggle={close}>
      <Video src={file.link()} />
    </Modal>
  );
};

VideoModal.propTypes = {
  video: PropTypes.object,
  clear: PropTypes.func,
};

export default VideoModal;
