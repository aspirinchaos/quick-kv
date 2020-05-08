import React from 'react';
import PropTypes from 'prop-types';

import { FormGroupRow, InputType } from '/imports/core/ui/atoms';

const InputRow = ({ label, id, ...rest }) => (
  <FormGroupRow id={id} label={label}>
    <InputType
      id={id}
      {...rest}
    />
  </FormGroupRow>
);

InputRow.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default InputRow;
