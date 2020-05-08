import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ButtonLink = ({ onClick, children, ...rest }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Button tag={'a'} color={'link'} onClick={handleClick} {...rest}>
      {children}
    </Button>

  );
};

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonLink;
