import React from 'react';
import SideBar from '../Common/SideBar';
import DragAndDrop from './DragAndDrop';

const Upload = () => {

  return (
    <div className='row px-3'>
      <SideBar />
      <div className={`col-12 col-md-8`}>
        <DragAndDrop />
      </div>
    </div>
  );
};

export default Upload;