import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import UploadInputBox from '../Common/UploadInputBox';

const DragAndDrop = () => {
  const fileTypes = ['jpg', 'png', 'gif', 'jpeg', 'docx', 'pdf'];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name='file'
                  label='Add Files'
                  onSelect={((file) => console.log(file.name))}
                  children={<UploadInputBox />
                  }
    />
  );
};

export default DragAndDrop;