import React from 'react';
import styled from 'styled-components';
import { CustomInput } from 'reactstrap';

const Checkbox = styled(p => <CustomInput type={'checkbox'} {...p} />)`
  font-size: 1rem;
  input, label {
    cursor: pointer;
  }
`;

export default Checkbox;
