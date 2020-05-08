import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';

import { InputType } from '/imports/core/ui/atoms';

const InputCol = ({ label, id, ...rest }) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <InputType
      id={id}
      {...rest}
    />
  </FormGroup>
);

InputCol.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default InputCol;
