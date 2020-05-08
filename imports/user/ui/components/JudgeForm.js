import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';

import { Users } from '/imports/user';

import { InputRow } from '/imports/core/ui/atoms';

const JudgeForm = ({ judge, formRef, onSubmit }) => {
  const [state, setState] = useState({});

  const {
    email = '',
    name = '',
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
        label={Users.schema.label('profile.name')}
        type={'text'}
        id={'name'}
        name={'name'}
        value={name}
        onChange={onChange}
      />
      <InputRow
        label={Users.schema.label('emails.$.address')}
        type={'email'}
        id={'email'}
        name={'email'}
        value={email}
        onChange={onChange}
      />
    </Form>
  );
};

JudgeForm.propTypes = {
  judge: PropTypes.object,
  onSubmit: PropTypes.func,
  formRef: PropTypes.object,
};

export default JudgeForm;
