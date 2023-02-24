import React from 'react';
import styles from '../styles/Home.module.css';
import Upload from '../Components/Upload/Upload';
import HomeFooter from '../Components/Home/HomeFooter';
import NavContainer from '../Components/navContainer/NavContainer';

const uploads = () => {
  return (
    <div className={styles.body}>
      <NavContainer />
      <Upload />
      <HomeFooter />
    </div>
  );
};

export default uploads;
