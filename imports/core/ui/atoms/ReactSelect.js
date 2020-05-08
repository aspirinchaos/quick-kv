import PropTypes from 'prop-types';
import React from 'react';
import SimpleSelect from 'react-select';
import AsyncSelect from 'react-select/async';

const ReactSelect = ({ options, selected, onChange, empty, async, ...rest }) => {
  if (options) {
    options = options.map((option) => {
      option.label = option.label || option.title;
      if (option.value === selected) {
        selected = option;
      }
      return option;
    });
  }

  const handleChange = (option) => {
    if (!option) {
      onChange('');
      return;
    }
    onChange(async ? option : option.value);
  };
  const Select = async ? AsyncSelect : SimpleSelect;

  return (
    <Select
      classNamePrefix={'react-select'}
      value={selected}
      onChange={handleChange}
      options={options}
      placeholder={empty}
      {...rest}
    />
  );
};

ReactSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  })),
  onChange: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  empty: PropTypes.string,
  async: PropTypes.bool,
};

export default ReactSelect;
