import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Upload from '../Components/Upload/Upload';
import HomeFooter from '../Components/Home/HomeFooter';

const uploads = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Upload/>
      <HomeFooter/>
    </div>
  );
};

export default uploads;
