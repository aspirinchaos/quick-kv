import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Stages } from '/imports/participant';

import { LoadingHolder } from '/imports/core/ui/atoms';
import VoteItem from './VoteItem';

const Voting = () => {
  const loading = useTracker(() => {
    const handle = Stages.publications.judging.subscribe();
    return !handle.ready();
  }, []);

  const stage = useTracker(() => Stages.findOne({ active: true }), []);

  return (
    <LoadingHolder loading={loading}>
      {stage ? (
        <>
          <Row className={'m-4'}>
            <Col>
              <h1>{stage.name}</h1>
              <p>{stage.desc}</p>
            </Col>
          </Row>
          {stage.participants.map((participant) => (
            <Row key={participant._idParticipant}>
              <Col>
                <VoteItem
                  stage={stage}
                  participant={participant}
                />
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <h1 className={'text-center m-4'}>Waiting for next stage</h1>
      )}
    </LoadingHolder>
  );
};

export default Voting;
