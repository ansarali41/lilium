import React from 'react';
import styles from '../styles/Home.module.css';
import HomeFooter from '../Components/Home/HomeFooter';
import NavContainer from '../Components/navContainer/NavContainer';
import CreateCollection from '../Components/Submit/CreateCollection';


const MyComponent = () => {
  return (
    <div className={styles.body}>
      <NavContainer />
      <CreateCollection />
      <HomeFooter />
    </div>
  );
};

export default MyComponent;
