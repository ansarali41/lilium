import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import Circle from '../../assest/images/Ellipse 173.png';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='row'>
      <div className='col-md-6 m-5'>
        <h1 className={styles.bannerHeaderText}>
          THE BEST
          <br /> COMMUNITY
          <br /> CENTRIC NFT
          <br /> <span className={styles.colorText}>SALE PLATFORM</span>
        </h1>
        <p className={styles.bannerText}>
          LILIUM is a next-generation smart contract platform through which each
          your audience by using our SaaS solutions to build your own custom
          white label NFT marketplace.
        </p>
        <button className={styles.bannerButtons}>
          <Link href='/submit' className={styles.navLinks}>
            Create Collection
          </Link>
        </button>
      </div>
      <div className='col-md-5'>
        <Image className='img-fluid' src={Circle} alt='circle' />
      </div>
    </div>
  );
};

export default Banner;
