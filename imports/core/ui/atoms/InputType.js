import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import {
  Select,
  InputTextNumber,
  Search,
  ReactSelect,
} from '/imports/core/ui/atoms';

const InputType = ({ type, onChange, name, value, ...rest }) => {
  if (type === 'select') {
    return (
      <Select
        name={name}
        selected={value}
        onChange={(selected) => onChange({ [name]: selected })}
        {...rest}
      />
    );
  }
  if (type === 'text-number') {
    return (
      <InputTextNumber
        name={name}
        value={value}
        onChange={(text) => onChange({ [name]: text })}
        {...rest}
      />
    );
  }
  if (type === 'search') {
    return (
      <Search
        name={name}
        value={value}
        onChange={(text) => onChange({ [name]: text })}
        {...rest}
      />
    );
  }
  if (type === 'react-select') {
    return (
      <ReactSelect
        name={name}
        selected={value}
        onChange={(selected) => onChange({ [name]: selected })}
        {...rest}
      />
    );
  }

  const inputOnChange = (e) => {
    onChange({ [name]: e.target.value });
  };

  return (
    <Input
      type={type}
      name={name}
      value={value}
      onChange={inputOnChange}
      {...rest}
    />
  );
};

InputType.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
};

export default InputType;
