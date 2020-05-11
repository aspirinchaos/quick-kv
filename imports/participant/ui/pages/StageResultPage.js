import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CardHeader, CardBody, Table, Card, Row, Col } from 'reactstrap';

import { GROUP_KEYS, GROUPS, Participants, Scores, Stages } from '/imports/participant';
import { useRouter } from '/imports/core';

import { Page, LoadingHolder } from '/imports/core/ui/atoms';
import StageResultTableItem from '../components/StageResultTableItem';
import VideoModal from '../components/VideoModal';

const StageResultPage = () => {
  const _id = useRouter('_id');

  const loading = useTracker(() => {
    const handle = Stages.publications.one.subscribe(_id);
    return !handle.ready();
  }, [_id]);

  const allVotes = useTracker(() => Scores.find({ _idStage: _id }).fetch(), [_id]);
  const stage = useTracker(() => Stages.findOne(_id), [_id]);

  const [video, setVideo] = useState(null);

  const { participants = [] } = stage || {};
  const groups = {
    [GROUP_KEYS.normal]: [],
    [GROUP_KEYS.semi]: [],
    [GROUP_KEYS.weak]: [],
  };

  if (!loading) {
    participants.forEach((par) => {
      const participant = Participants.findOne(par._idParticipant);
      const votes = allVotes.filter((v) => v._idParticipant === par._idParticipant);
      const score = votes.reduce((sum, vote) => sum + vote.value, 0) / votes.length;
      par.participant = participant;
      par.score = score;
      groups[participant.group].push(par);
    });

    Object.keys(groups).forEach((key) => {
      groups[key] = groups[key].sort((a, b) => b.score - a.score);
    });
  }


  return (
    <Page>
      <LoadingHolder loading={loading}>
        {stage && (
          <Row className={'m-4'}>
            <Col>
              <h1>{stage.name}</h1>
              <p>{stage.desc}</p>
            </Col>
          </Row>
        )}
        {Object.keys(groups).map((key) => (
          <Card key={key} className={'m-4'}>
            <CardHeader>{GROUPS[key].title}</CardHeader>
            {groups[key].length ? (
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Participant</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Result</th>
                    <th>{' '}</th>
                  </tr>
                </thead>
                <tbody>
                  {groups[key].map((mg, index) => (
                    <StageResultTableItem
                      key={mg._idParticipant}
                      number={index + 1}
                      participant={mg}
                      view={() => setVideo(mg)}
                    />
                  ))}
                </tbody>
              </Table>
            ) : (
              <h4 className={'text-center m-4'}>There is no participants</h4>
            )}
          </Card>
        ))}
      </LoadingHolder>
      <VideoModal video={video} clear={() => setVideo(null)} />
    </Page>
  );
};

export default StageResultPage;
