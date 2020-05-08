import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Loading from './Loading';
import Spinner from './Spinner';

const LoadingHolder = ({ loading, bottom, children, ...rest }) => {
  if (bottom) {
    return (
      <Holder loading={loading} bottom={bottom} {...rest}>
        {loading && <Loading />}
        {children}
      </Holder>
    );
  }

  return (
    <Holder loading={loading} bottom={bottom} {...rest}>
      {loading ? <Loading /> : children}
    </Holder>
  );
};

LoadingHolder.propTypes = {
  loading: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
};

export default LoadingHolder;

const Holder = styled(({ loading, bottom, ...rest }) => <div {...rest} />)`
  ${(p) => p.loading && css`
    min-height: 200px;
    position: relative;
    &:after {
      content: '';
      background-color: rgba(255, 255, 255, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
  ${Spinner} {
    display: block;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    z-index: 2000;
    margin: auto;
    ${(p) => p.bottom && css`
      bottom: 50px;
      top: auto;
    `};
  }
`;
