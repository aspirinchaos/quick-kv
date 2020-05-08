import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Col } from 'reactstrap';

import { LineDashed } from '/imports/core/ui/atoms';

const FormGroupRow = ({ label, id, offset = false, children }) => (
  <>
    <FormGroup row>
      {offset ? <Col lg={2} md={3} /> : <Label lg={2} md={3} for={id}>{label}</Label>}
      <Col lg={10} md={9}>
        {children}
      </Col>
    </FormGroup>
    <LineDashed />
  </>
);

FormGroupRow.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  offset: PropTypes.bool,
  children: PropTypes.node,
};

export default FormGroupRow;
