import React from 'react';
import { FileUploader } from "react-drag-drop-files";
const DragAndDrop = () => {
    const fileTypes = ["jpg", "png", "gif", "jpeg", 'docx   '];
    const handleChange = (file) => {
        setFile(file);
      };
    return (
        <FileUploader handleChange={handleChange} name="file"
        label='Add Files'
        children={<div className="btn bg-white text-dark">Add Files</div>}
        />
    );
};

export default DragAndDrop;