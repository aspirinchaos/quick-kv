import React from 'react';
import PropTypes from 'prop-types';
import { Player, BigPlayButton } from 'video-react';

const Video = ({ src }) => (
  <Player src={src}>
    <BigPlayButton position={'center'} />
  </Player>
);

Video.propTypes = {
  src: PropTypes.string,
};

export default Video;
