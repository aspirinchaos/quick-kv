import React from 'react';
import PropTypes from 'prop-types';

import { FormGroupRow, Checkbox } from '/imports/core/ui/atoms';

const CheckboxRow = ({ label, id, onChange, name, checked, ...rest }) => (
  <FormGroupRow offset>
    <Checkbox
      id={id}
      label={label}
      name={name}
      checked={checked}
      onChange={(e) => onChange({ [name]: e.target.checked })}
      {...rest}
    />
  </FormGroupRow>
);

CheckboxRow.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckboxRow;
