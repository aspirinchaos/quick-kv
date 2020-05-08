import React from 'react';
import styled from 'styled-components';
import { CustomInput } from 'reactstrap';

const Radio = styled(p => <CustomInput type={'radio'} {...p} />)`
  font-size: 1rem;
  input, label {
    cursor: pointer;
  }
`;

export default Radio;
