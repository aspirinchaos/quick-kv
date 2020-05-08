import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import { Users } from '/imports/user';

import TopNavbar from '../components/TopNavbar';
import GlobalStyle from '../globalStyles';

const MainLayout = ({ content }) => {
  const isAdmin = useTracker(() => Users.isAdmin(), []);


  return (
    <Container>
      {isAdmin && <TopNavbar />}
      {content}
      <GlobalStyle />
    </Container>
  );
};

MainLayout.propTypes = {
  content: PropTypes.node.isRequired,
};

export default MainLayout;
