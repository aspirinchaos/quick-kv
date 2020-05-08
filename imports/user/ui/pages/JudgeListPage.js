import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Table, Card, Row, Col } from 'reactstrap';

import { Users } from '/imports/user';

import { Page, LoadingHolder } from '/imports/core/ui/atoms';
import JudgeTableItem from '../components/JudgeTableItem';
import JudgeModal from '../components/JudgeModal';

const JudgeListPage = () => {
  const loading = useTracker(() => {
    const handle = Users.publications.judges.subscribe();
    return !handle.ready();
  }, []);
  const judges = useTracker(() => Users.getJudges(), []);

  const [judge, setJudge] = useState(null);

  return (
    <Page>
      <Row>
        <Col>
          <h1 className={'mb-4'}>Adjudicators</h1>
        </Col>
        <Col>
          <Button
            className={'float-right mt-2'}
            color={'primary'}
            onClick={() => setJudge({})}
          >
            Add adjudicator
          </Button>
        </Col>
      </Row>
      <Card>
        <LoadingHolder loading={loading}>
          {judges.length ? (
            <Table hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Activated</th>
                </tr>
              </thead>
              <tbody>
                {judges.map((mg) => (
                  <JudgeTableItem
                    key={mg._id}
                    judge={mg}
                  />
                ))}
              </tbody>
            </Table>
          ) : (
            <h4 className={'text-center m-4'}>There is no adjudicators</h4>
          )}
        </LoadingHolder>
      </Card>
      <JudgeModal judge={judge} clear={() => setJudge(null)} />
    </Page>
  );
};

export default JudgeListPage;
