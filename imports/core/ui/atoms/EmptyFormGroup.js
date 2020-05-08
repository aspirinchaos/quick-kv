import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';

const EmptyFormGroup = ({ label, children }) => (
  <FormGroup>
    <EmptyLabel>{label || '\u00A0'}</EmptyLabel>
    {children}
  </FormGroup>
);

EmptyFormGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default EmptyFormGroup;

const EmptyLabel = styled(Label)`
  display: block;
`;
