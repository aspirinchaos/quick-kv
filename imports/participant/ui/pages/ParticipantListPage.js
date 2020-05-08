import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Table, Card, Row, Col } from 'reactstrap';

import { Participants } from '/imports/participant';

import { Page, LoadingHolder } from '/imports/core/ui/atoms';
import ParticipantTableItem from '../components/ParticipantTableItem';
import ParticipantModal from '../components/ParticipantModal';

const ParticipantListPage = () => {
  const loading = useTracker(() => {
    const handle = Participants.publications.all.subscribe();
    return !handle.ready();
  }, []);
  const participants = useTracker(() => Participants.find().fetch(), []);

  const [participant, setParticipant] = useState(null);

  return (
    <Page>
      <Row>
        <Col>
          <h1 className={'mb-4'}>Participants</h1>
        </Col>
        <Col>
          <Button
            className={'float-right mt-2'}
            color={'primary'}
            onClick={() => setParticipant({})}
          >
            Add participant
          </Button>
        </Col>
      </Row>
      <Card>
        <LoadingHolder loading={loading}>
          {participants.length ? (
            <Table hover>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Group</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((mg) => (
                  <ParticipantTableItem
                    key={mg._id}
                    participant={mg}
                  />
                ))}
              </tbody>
            </Table>
          ) : (
            <h4 className={'text-center m-4'}>There is no participants</h4>
          )}
        </LoadingHolder>
      </Card>
      <ParticipantModal participant={participant} clear={() => setParticipant(null)} />
    </Page>
  );
};

export default ParticipantListPage;
