import React, { useEffect, useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import uploadStyles from '../../styles/Upload.module.css';
import submitStyles from '../../styles/Submit.module.css';
import Image from 'next/image';
import Link from 'next/link';
import navStyle from '../../styles/navbar.module.css';
import uploadCloud from '../../assest/images/llium-assets/upload_cloud_icon.svg';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 10,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  // border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 350,
  height: 220,
  padding: 4,
  boxSizing: 'border-box',
  justifyContent: 'center',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  alignItems: 'center',
};
//
// const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%',
// };

const PreviewsJson = (props) => {
  const acceptedFileTypes = ['.json'];
  const [jsonData, setJsonData] = useState(null);

  const handleDrop = (acceptedFiles) => {
    // Check if any files were dropped
    if (acceptedFiles.length === 0) {
      console.log('No files dropped');
      return;
    }

    // Check that only one file was dropped
    if (acceptedFiles.length > 1) {
      console.log('Please drop only one file');
      return;
    }

    // Check that the dropped file is a JSON file
    const droppedFile = acceptedFiles[0];
    if (!droppedFile.type.includes('json')) {
      console.log('Please drop a JSON file');
      return;
    }

    // Read the dropped file and extract the JSON data
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      const jsonData = JSON.parse(fileContent);
      setJsonData(jsonData);
      console.log(jsonData);
    };
    reader.readAsText(droppedFile);
  };
  return (
    <div>
      {/* <div>
      <Dropzone onDrop={handleDrop} accept="application/json">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop a JSON file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      {jsonData && (
        <div>
          <p>JSON data:</p>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div> */}
      <section className={`${uploadStyles.uploadContainer}`}>
        <h1 className={submitStyles.title}>UPLOAD FILE</h1>
        <hr
          style={{
            marginTop: 30,
            color: '#E0E0E0',
          }}
        />
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 16,
            marginTop: 53,
            marginBottom: 61,
          }}
        >
          Upload the metadata file containing the standard specified{' '}
          <a href="#">here</a>
        </p>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className={`${uploadStyles.addFileBox}`}>
                <div className="flex flex-col items-center justify-center  "></div>
                <p className="text-center text-warning ">
                  Drag and drop any files <br /> here, or click below to <br />
                  browse.
                </p>
                <button className="bg-white hover:bg-white-700 text-black font-bold py-2 px-4 rounded-2xl">
                  Add files
                </button>
              </div>
            </div>
          )}
        </Dropzone>

        <p className={submitStyles.fileType}>File type: Json</p>
      </section>
      <div className={`d-flex justify-content-center`}>
        <div className={` d-flex justify-content-center`}>
          <Link href="/payment" className={navStyle.navLinks}>
            <button type="submit" className={submitStyles.nextButton}>
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PreviewsJson;
