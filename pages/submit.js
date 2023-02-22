import React from 'react';
import styles from '../styles/Home.module.css';
import submitStyles from '../styles/Submit.module.css';
import Header from '../Components/Header';
import Upload from '../Components/Upload/Upload';
import UploadHeader from '../Components/Common/UploadHeader';
import Submit from '../Components/Submit/Submit';


const MyComponent = () => {
  return (
    <div className={styles.body}>
      <Header />
     <Submit/>
    </div>
  );
};

export default MyComponent;
