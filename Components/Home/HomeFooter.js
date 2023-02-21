import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import Flower from '../../assest/images/image 9.png';
const HomeFooter = () => {
  return (
    <div className={styles.homeFooter}>
      <div className="text-center pt-5">
        <Image src={Flower} alt="flower" width={187} height={138} />
      </div>
      <div className="pt-5 mt-5 container">
        <p className={styles.homeFooterText}>
          Copyright Repair Lilium 2023 All rights reserved. -- Privacy Policy -
          Terms of Services{' '}
          <span style={{ float: 'right' }}>Supported by Moazan Ali Ghurki</span>
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
