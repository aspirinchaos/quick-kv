import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Table, Card, Row, Col } from 'reactstrap';

import { Stages } from '/imports/participant';

import { Page, LoadingHolder, Toastr } from '/imports/core/ui/atoms';
import StageTableItem from '../components/StageTableItem';
import StageModal from '../components/StageModal';

const StageListPage = () => {
  const loading = useTracker(() => {
    const handle = Stages.publications.all.subscribe();
    return !handle.ready();
  }, []);
  const stages = useTracker(() => Stages.find().fetch(), []);

  const [stage, setStage] = useState(null);

  const activate = ({ _id }) => {
    Stages.methods.activate(_id).then(() => {
      Toastr.success('Stage was activated!');
    });
  };

  return (
    <Page>
      <Row>
        <Col>
          <h1 className={'mb-4'}>Stages</h1>
        </Col>
        <Col>
          <Button
            className={'float-right mt-2'}
            color={'primary'}
            onClick={() => setStage({})}
          >
            Add stage
          </Button>
        </Col>
      </Row>
      <Card>
        <LoadingHolder loading={loading}>
          {stages.length ? (
            <Table hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((mg) => (
                  <StageTableItem
                    key={mg._id}
                    stage={mg}
                    activate={() => activate(mg)}
                  />
                ))}
              </tbody>
            </Table>
          ) : (
            <h4 className={'text-center m-4'}>There is no stages</h4>
          )}
        </LoadingHolder>
      </Card>
      <StageModal stage={stage} clear={() => setStage(null)} />
    </Page>
  );
};

export default StageListPage;
