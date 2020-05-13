import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardBody, Card, CardHeader, CardFooter, Row, Col, Button } from 'reactstrap';
import ReactCodeInput from 'react-code-input';

import { Files, Participants, Scores } from '/imports/participant';
import { Toastr, Video } from '../atoms';

const VoteItem = ({ participant: { _idParticipant, _idFile }, stage }) => {
  const part = Participants.findOne(_idParticipant);
  const file = Files.findOne(_idFile);

  const isVoted = Scores.getScore(_idParticipant, stage._id);

  const [code, setCode] = useState('');

  const result = isVoted ? isVoted.value : `${code[0] || ''}.${code[1] || ''}`;

  const vote = () => {
    const value = Number(result);
    if (Number.isNaN(value)) {
      Toastr.error('Bad result, please check score');
      return;
    }
    Scores.methods.insert({
      value,
      _idParticipant,
      _idStage: stage._id,
    }).then(() => {
      Toastr.success('Your vote had been counted');
    });
  };

  return (
    <Card className={'m-4'}>
      <CardHeader>Participant {part.number}</CardHeader>
      <CardBody>
        <Video src={file.link()} />
      </CardBody>
      <CardFooter>
        <Row>
          {!isVoted && (
            <Col>
              <ReactCodeInput
                autoFocus={false}
                type={'number'}
                value={code}
                fields={2}
                onChange={(value) => setCode(value)}
              />
            </Col>
          )}
          <Col>
            <h1 className={'text-center'}>Result is: {result}</h1>
          </Col>
          {!isVoted && (
            <Col>
              <Button
                className={'float-right'}
                size={'lg'}
                color={'primary'}
                onClick={vote}
              >
                Done
              </Button>
            </Col>
          )}
        </Row>
      </CardFooter>
    </Card>
  );
};

VoteItem.propTypes = {
  participant: PropTypes.object,
  stage: PropTypes.object,
};

export default VoteItem;
