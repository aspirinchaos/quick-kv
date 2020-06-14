import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Table, Card, Row, Col } from 'reactstrap';

import { Participants, Stages } from '/imports/participant';
import { Users } from '/imports/user';
import { useRouter } from '/imports/core';

import { Page, LoadingHolder, BsSwal } from '/imports/core/ui/atoms';
import StageParticipantTableItem from '../components/StageParticipantTableItem';
import StageParticipantModal from '../components/StageParticipantModal';
import VideoModal from '../components/VideoModal';
import JudgesModal from '../components/JudgesModal';

const StageParticipantListPage = () => {
  const _id = useRouter('_id');

  const loading = useTracker(() => {
    const subs = [
      Stages.publications.one.subscribe(_id),
      Users.publications.judges.subscribe(),
      Participants.publications.all.subscribe(),
    ];
    return subs.some((s) => !s.ready());
  }, [_id]);

  const stage = useTracker(() => Stages.findOne(_id), [_id]);
  const { participants = [] } = stage || {};

  const [participant, setParticipant] = useState(null);
  const [video, setVideo] = useState(null);
  const [judges, setJudges] = useState(null);

  const remove = ({ _idParticipant }) => BsSwal.fire({
    title: 'Remove the participant from stage?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, remove',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.value) {
      Stages.methods.removeParticipant({ _id, _idParticipant }).then(() => BsSwal.fire({
        title: 'The participant was removed',
        icon: 'success',
      })).catch((e) => BsSwal.fire({
        title: e.message,
        icon: 'error',
      }));
    }
  });

  return (
    <Page>
      <Row>
        <Col>
          <h1 className={'mb-4'}>Stage participants</h1>
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
                  <th>Participant</th>
                  <th>Video</th>
                  <th>Votes</th>
                  <th>Result</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {participants.map((mg) => (
                  <StageParticipantTableItem
                    key={mg._idParticipant}
                    _idStage={_id}
                    participant={mg}
                    view={() => setVideo(mg)}
                    viewJudges={(jds) => setJudges(jds)}
                    remove={() => remove(mg)}
                  />
                ))}
              </tbody>
            </Table>
          ) : (
            <h4 className={'text-center m-4'}>There is no participants</h4>
          )}
        </LoadingHolder>
      </Card>
      <StageParticipantModal
        participant={participant}
        stage={stage}
        clear={() => setParticipant(null)}
      />
      <VideoModal video={video} clear={() => setVideo(null)} />
      <JudgesModal judges={judges} clear={() => setJudges(null)} />
    </Page>
  );
};

export default StageParticipantListPage;
