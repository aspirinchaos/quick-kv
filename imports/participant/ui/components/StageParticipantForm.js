import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';

import { Participants } from '/imports/participant';

import { InputRow, FormGroupRow } from '/imports/core/ui/atoms';
import UploadFile from './UploadFile';

const StageParticipantForm = ({ stage, formRef, onSubmit }) => {
  const [state, setState] = useState({});
  const [filename, setName] = useState('');

  const {
    _idFile = '',
    _idParticipant = '',
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
        label={'Participant'}
        type={'react-select'}
        id={'_idParticipant'}
        name={'_idParticipant'}
        value={_idParticipant}
        onChange={onChange}
        empty={'Select participant'}
        options={Participants.getForStage(stage)}
        isClearable
      />
      <FormGroupRow label={'Video'}>
        <UploadFile
          accept={'video/mp4,video/x-m4v,video/*'}
          file={_idFile}
          filename={filename}
          fileUploaded={(file) => {
            onChange({ _idFile: file._id });
            setName(file.name);
          }}
        />
      </FormGroupRow>
    </Form>
  );
};

StageParticipantForm.propTypes = {
  stage: PropTypes.object,
  onSubmit: PropTypes.func,
  formRef: PropTypes.object,
};

export default StageParticipantForm;
