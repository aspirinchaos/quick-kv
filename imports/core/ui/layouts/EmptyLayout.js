import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const EmptyLayout = ({ content }) => (
  <Container>
    {content}
  </Container>
);

EmptyLayout.propTypes = {
  content: PropTypes.node.isRequired,
};

export default EmptyLayout;
