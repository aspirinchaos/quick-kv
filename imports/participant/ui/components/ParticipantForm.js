import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';

import { Participants, GROUPS } from '/imports/participant';

import { InputRow } from '/imports/core/ui/atoms';

const ParticipantForm = ({ participant, formRef, onSubmit }) => {
  const [state, setState] = useState({});

  const {
    name = '',
    number = '',
    group = '',
  } = state;

  const onChange = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <Form innerRef={formRef} onSubmit={formSubmit}>
      <InputRow
        label={Participants.schema.label('number')}
        type={'text-number'}
        id={'number'}
        name={'number'}
        value={number}
        onChange={onChange}
      />
      <InputRow
        label={Participants.schema.label('name')}
        type={'text'}
        id={'name'}
        name={'name'}
        value={name}
        onChange={onChange}
      />
      <InputRow
        label={Participants.schema.label('group')}
        type={'select'}
        id={'group'}
        name={'group'}
        value={group}
        onChange={onChange}
        empty={'Select group'}
        options={GROUPS.asArray()}
      />
    </Form>
  );
};

ParticipantForm.propTypes = {
  participant: PropTypes.object,
  onSubmit: PropTypes.func,
  formRef: PropTypes.object,
};

export default ParticipantForm;
