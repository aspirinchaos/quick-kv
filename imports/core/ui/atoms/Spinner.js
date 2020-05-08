import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

import theme from '/imports/core/ui/theme';

export const CUBES = 'wandering-cubes';
export const CIRCLE = 'fading-circle';
export const BOUNCE = 'double-bounce';

const Spinner = ({ type, ...rest }) => {
  if (type === CUBES) {
    return (
      <WanderingCubes {...rest}>
        <WanderingCube />
        <WanderingCube delay />
      </WanderingCubes>
    );
  }

  if (type === BOUNCE) {
    return (
      <div className={'sk-spinner sk-spinner-double-bounce'}>
        <div className={'sk-double-bounce1'} />
        <div className={'sk-double-bounce2'} />
      </div>
    );
  }

  if (type === CIRCLE) {
    return (
      <div className={'sk-spinner sk-spinner-fading-circle'}>
        <div className={'sk-circle1 sk-circle'} />
        <div className={'sk-circle2 sk-circle'} />
        <div className={'sk-circle3 sk-circle'} />
        <div className={'sk-circle4 sk-circle'} />
        <div className={'sk-circle5 sk-circle'} />
        <div className={'sk-circle6 sk-circle'} />
        <div className={'sk-circle7 sk-circle'} />
        <div className={'sk-circle8 sk-circle'} />
        <div className={'sk-circle9 sk-circle'} />
        <div className={'sk-circle10 sk-circle'} />
        <div className={'sk-circle11 sk-circle'} />
        <div className={'sk-circle12 sk-circle'} />
      </div>
    );
  }
};

Spinner.propTypes = {
  type: PropTypes.oneOf([CUBES, CIRCLE, BOUNCE]),
};

export default styled(Spinner)``;

const WanderingCubeMove = keyframes`
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  }

  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  }

  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  }

  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }

  100% {
    transform: rotate(-360deg);
  }
`;

const WanderingCubes = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  margin: auto;
`;

const WanderingCube = styled.div`
  background-color: ${theme.colors.primary};
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${WanderingCubeMove} 1.8s infinite ease-in-out;
  ${p => p.delay && css`
    animation-delay: -0.9s;
  `};
`;
