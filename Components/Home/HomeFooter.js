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
        <div style={{ paddingTop: '59px', paddingBottom: '30px' }}>
          <Image
            style={{ marginRight: '19px', cursor: 'pointer' }}
            src={git}
            alt=""
          />

          <Image
            style={{ marginRight: '18px', cursor: 'pointer' }}
            src={twitter}
            alt=""
          />
          <Image style={{ cursor: 'pointer' }} src={discord} alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className={styles.homeFooterText}>
            Copyright Repair Lilium 2023 All rights reserved. -- Privacy Policy
            - Terms of Services
          </p>
        </div>
        <div>
          <p>Supported by Moazan Ali Ghurki</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
