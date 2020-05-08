import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';

import { Users } from '/imports/user';

import { Page } from '/imports/core/ui/atoms';
import Voting from '../components/Voting'

const HomePage = () => {
  const isJudge = useTracker(() => Users.isJudge(), []);


  return (
    <Page>
      {isJudge && <Voting />}
    </Page>
  );
};

export default HomePage;
