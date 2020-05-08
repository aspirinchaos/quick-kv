import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';

import { Stages } from '/imports/participant';

import { InputRow } from '/imports/core/ui/atoms';

const StageForm = ({ stage, formRef, onSubmit }) => {
  const [state, setState] = useState({});

  const {
    name = '',
    desc = '',
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
        label={Stages.schema.label('name')}
        type={'text'}
        id={'name'}
        name={'name'}
        value={name}
        onChange={onChange}
      />
      <InputRow
        label={Stages.schema.label('desc')}
        type={'textarea'}
        id={'desc'}
        name={'desc'}
        value={desc}
        onChange={onChange}
      />
    </Form>
  );
};

StageForm.propTypes = {
  stage: PropTypes.object,
  onSubmit: PropTypes.func,
  formRef: PropTypes.object,
};

export default StageForm;
