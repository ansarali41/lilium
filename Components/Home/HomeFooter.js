import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import Flower from '../../assest/images/image 9.svg';
import git from '../../assest/images/github.svg';
import twitter from '../../assest/images/Twitter.svg';
import discord from '../../assest/images/Discord.svg';

const HomeFooter = () => {
  return (
    <div className={styles.homeFooter}>
      <div className='text-center pt-5'>
        <div className='d-flex justify-content-center'>
          <Image
            className='img-fluid'
            src={Flower}
            alt='flower'
            width={187}
            height={138}
          />
        </div>
        <div style={{ paddingTop: '59px', paddingBottom: '30px' }} className='d-flex justify-content-center'>
          <Image
            style={{ marginRight: '18px', cursor: 'pointer' }}
            src={twitter}
            alt=''
          />

          <Image
            style={{ marginRight: '19px', cursor: 'pointer' }}
            src={git}
            alt=''
          />
          <Image style={{ cursor: 'pointer' }} src={discord} alt='' />
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <p className={styles.homeFooterText}>
            Copyright Repair Lilium 2023 All rights reserved. -- Privacy Policy
            - Terms of Services
          </p>
        </div>
        <div className={styles.homeFooterText}>
          <p>Supported by <strong>Moazan Ali Ghurki</strong></p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
