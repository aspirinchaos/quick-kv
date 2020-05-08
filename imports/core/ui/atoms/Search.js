import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { useDebouncedCallback } from 'use-debounce';

import { FA } from '/imports/core/ui/atoms';

const Search = ({ onChange, value: v, noDelay, ...props }) => {
  const [value, setValue] = useState('');
  const [debouncedUpdate] = useDebouncedCallback(onChange, 1000);

  const onSearch = (e) => {
    const search = e.currentTarget.value;
    setValue(search);
    if (noDelay) {
      onChange(search);
    } else {
      debouncedUpdate(search);
    }
  };
  return (

    <InputGroup>
      <InputGroupAddon addonType={'prepend'}>
        <InputGroupText><FA icon={'search'} /></InputGroupText>
      </InputGroupAddon>
      <Input
        type={'string'}
        onChange={onSearch}
        value={value}
        {...props}
      />
    </InputGroup>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  noDelay: PropTypes.bool,
};

export default Search;
