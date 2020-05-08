import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const CheckboxList = ({ id, options, checked = [], onChange, ...rest }) => {
  const onChecked = (e) => {
    const { value } = e.target;
    const index = checked.findIndex(c => c === value);
    if (index === -1) {
      checked.push(value);
    } else {
      checked.splice(index, 1);
    }
    onChange([...checked]);
  };

  return options.map(option => (
    <Checkbox
      key={option.value}
      id={`${id}-${option.value}`}
      value={option.value}
      label={option.title}
      checked={checked.includes(option.value)}
      onChange={onChecked}
      {...rest}
    />
  ));
};

CheckboxList.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  })),
  checked: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckboxList;
