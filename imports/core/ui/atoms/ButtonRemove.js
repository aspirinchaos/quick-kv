import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { FA } from './index';

const ButtonRemove = ({ children, remove, ...rest }) => (
  <Button
    size={'xs'}
    color={'danger'}
    className={'mr-1'}
    onClick={remove}
    {...rest}
  >
    <FA icon={'trash'} />{' '}
    {children}
  </Button>
);

ButtonRemove.propTypes = {
  children: PropTypes.node,
  remove: PropTypes.func,
};

export default ButtonRemove;
