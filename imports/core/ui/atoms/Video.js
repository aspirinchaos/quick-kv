import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Player, BigPlayButton } from 'video-react';

const Video = ({ src, setSmall }) => {
  const player = useRef(null);

  const fluid = player.current && player.current.videoHeight < player.current.videoWidth;

  const height = player.current && player.current.videoHeight;

  useEffect(() => {
    setSmall(fluid);
  }, [fluid]);

  return (
    <Player src={src} ref={player} fluid={fluid} height={height}>
      <BigPlayButton position={'center'} />
    </Player>
  );
};

Video.propTypes = {
  src: PropTypes.string,
  setSmall: PropTypes.func,
};

export default Video;
