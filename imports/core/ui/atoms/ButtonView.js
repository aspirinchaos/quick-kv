import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { FA } from './index';

const ButtonView = ({ children, view, ...rest }) => (
  <Button
    size={'xs'}
    color={'success'}
    className={'mr-1'}
    onClick={view}
    {...rest}
  >
    <FA icon={'folder'} />{' '}
    {children}
  </Button>
);

ButtonView.propTypes = {
  children: PropTypes.node,
  view: PropTypes.func,
};

export default ButtonView;
