import React from 'react';
import styles from '../styles/Home.module.css';
import Upload from '../Components/Upload/Upload';
import HomeFooter from '../Components/Home/HomeFooter';
import NavContainer from '../Components/navContainer/NavContainer';

const uploads = () => {
  return (
    <div className={`${styles.body} ${styles.bodyContainer}`}>
      <div className={styles.mainContent}>
        <NavContainer />
        <Upload />
      </div>
      <div className="mt-auto">
        <HomeFooter />
      </div>
    </div>
  );
};

export default uploads;
