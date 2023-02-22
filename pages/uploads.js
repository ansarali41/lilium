import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Upload from '../Components/Upload/Upload';

const uploads = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Upload/>
    </div>
  );
};

export default uploads;
