import React from 'react';
import submitStyles from '../../styles/Submit.module.css';
import uploadStyles from '../../styles/Upload.module.css';
import navStyle from '../../styles/navbar.module.css';
import UploadHeader from '../Common/UploadHeader';
import DragAndDrop from './DragAndDrop';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

const Upload = () => {

  return (
    <div className='row px-3'>
      <UploadHeader />
      <div className={`col-12 col-md-8`}>
        <DragAndDrop />
      </div>


    </div>
  );
};

export default Upload;