import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Page = ({ children }) => (
  <Row>
    <Col>
      {children}
    </Col>
  </Row>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
