import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';

import { Files } from '/imports/participant';

import { FA, Toastr } from '/imports/core/ui/atoms';

const UploadFile = ({ accept, file, filename, fileUploaded }) => {
  const [uploading, setUploading] = useState(false);
  const inputEl = useRef(null);

  const startUpload = () => {
    inputEl.current.click();
  };

  const uploadFile = (e) => {
    const { files } = e.currentTarget;
    if (uploading || !files || !files.length) {
      return;
    }

    const upload = Files.insert({
      file: files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic',
    }, false);

    upload.on('start', function () {
      setUploading(true);
    });

    upload.on('end', (error, fileObj) => {
      if (error) {
        Toastr.error(error);
      } else {
        Toastr.success(`File ${fileObj.name} was uploaded`);
        setUploading(false);
        fileUploaded(fileObj);
      }
    });

    upload.start();
  };

  return (
    <>
      <input
        className={'d-none'}
        ref={inputEl}
        type={'file'}
        accept={accept}
        onChange={uploadFile}
      />
      <Button
        color={'primary'}
        onClick={startUpload}
        disabled={uploading}
        size={'sm'}
      >
        {uploading && <><Spinner size={'sm'} /> Uploading</>}
        {!file && !uploading && (<><FA icon={'upload'} /> Select file</>)}
        {file && (<><FA icon={'file'} /> {filename}</>)}
      </Button>
    </>
  );
};

UploadFile.propTypes = {
  accept: PropTypes.string,
  file: PropTypes.string,
  filename: PropTypes.string,
  fileUploaded: PropTypes.func,
};

export default UploadFile;
