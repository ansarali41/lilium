import React from 'react';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import Diagram from '../../assest/images/Diagram.png';
const HomeWork = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <h2 className={styles.homeWorkText}>HOW IT WORKS</h2>
      <div>
        <Image className="img-fluid" src={Diagram} alt="working flow" />
      </div>
    </div>
  );
};

export default HomeWork;
