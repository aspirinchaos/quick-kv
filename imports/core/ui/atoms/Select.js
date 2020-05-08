import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const Select = ({ options, selected, onChange, empty = '', ...other }) => {
  const handleChange = (e) => {
    onChange(e.currentTarget.value);
  };

  return (
    <Input
      type={'select'}
      value={selected}
      onChange={handleChange}
      {...other}
    >
      {empty && <option value={''}>{empty}</option>}
      {options.map(({ value, title }) => <option key={value} value={value}>{title}</option>)}
    </Input>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  })),
  onChange: PropTypes.func,
  selected: PropTypes.string,
  empty: PropTypes.string,
};

export default Select;
