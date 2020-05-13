import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Player, BigPlayButton } from 'video-react';

const Video = ({ src, setSmall }) => {
  const player = useRef(null);
  const [pl, setPl] = useState({});

  useEffect(() => {
    player.current.subscribeToStateChange(setPl);
  }, []);

  useEffect(() => {
    if (setSmall) {
      setSmall(pl.videoHeight < pl.videoWidth);
    }
  }, [pl.videoHeight]);

  return (
    <Player src={src} ref={player} fluid={pl.videoHeight < pl.videoWidth} height={pl.videoHeight}>
      <BigPlayButton position={'center'} />
    </Player>
  );
};

Video.propTypes = {
  src: PropTypes.string,
  setSmall: PropTypes.func,
};

export default Video;
