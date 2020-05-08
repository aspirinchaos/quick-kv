import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const InputTextNumber = ({ onChange, additional, value: defaultValue, ...rest }) => {
  const [value, setValue] = useState(defaultValue || '');

  const regexp = new RegExp(`[^0-9${additional}]+`);

  const inputOnChange = (e) => {
    const clear = e.target.value.replace(regexp, '');
    setValue(clear);
    if (onChange) {
      onChange(clear);
    }
  };

  return (
    <Input
      type={'text'}
      onChange={inputOnChange}
      pattern={`[0-9${additional}]*`}
      inputMode={'numeric'}
      value={value}
      {...rest}
    />
  );
};

InputTextNumber.propTypes = {
  onChange: PropTypes.func,
  additional: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default InputTextNumber;
