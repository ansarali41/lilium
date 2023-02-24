import React from 'react';
import styles from '../styles/Home.module.css';
import Submit from '../Components/Submit/Submit';
import HomeFooter from '../Components/Home/HomeFooter';
import NavContainer from '../Components/navContainer/NavContainer';


const MyComponent = () => {
  return (
    <div className={styles.body}>
      <NavContainer />
      <Submit />
      <HomeFooter />
    </div>
  );
};

export default MyComponent;
