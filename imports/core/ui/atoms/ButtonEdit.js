import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { FA } from './index';

const ButtonEdit = ({ children, edit, ...rest }) => (
  <Button
    size={'xs'}
    color={'primary'}
    className={'mr-1'}
    onClick={edit}
    {...rest}
  >
    <FA icon={'pencil-alt'} />{' '}
    {children}
  </Button>
);

ButtonEdit.propTypes = {
  children: PropTypes.node,
  edit: PropTypes.func,
};

export default ButtonEdit;
