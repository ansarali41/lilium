import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import Flower from '../../assest/images/image 9.png';
import git from '../../assest/images/Vector (1).png';
import twitter from '../../assest/images/Vector.png';
import discord from '../../assest/images/Layer_2.png';

const HomeFooter = () => {
  return (
    <div className={styles.homeFooter}>
      <div className="text-center pt-5">
        <Image
          className="img-fluid"
          src={Flower}
          alt="flower"
          width={187}
          height={138}
        />
        <div style={{ marginTop: '59px' }}>
          <Image style={{ marginRight: '19px' }} src={git} alt="" />

          <Image style={{ marginRight: '18px' }} src={twitter} alt="" />
          <Image src={discord} alt="" />
        </div>
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
