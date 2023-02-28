import React from 'react';
import SideBar from '../Common/SideBar';
import Previews from './ReactDragDrop';

const Upload = () => {

  return (
    <div className='row px-3'>
      <SideBar />
      <div className={`col-12 col-md-7`}>
        <Previews />
      </div>
    </div>
  );
};

export default Upload;