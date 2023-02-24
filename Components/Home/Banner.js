import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import Circle from '../../assest/images/1.jpeg';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="row">
        <div className="col-md-6">
          <h1 className={styles.bannerHeaderText}>
            THE BEST
            <br /> COMMUNITY
            <br /> CENTRIC NFT
            <br /> <span className={styles.colorText}>SALE PLATFORM</span>
          </h1>
          <p className={styles.bannerText}>
            LILIUM is a next-generation smart contract platform through which
            each your audience by using our SaaS solutions to build your own
            custom white label NFT marketplace.
          </p>
          <Link href="/submit" className={styles.navLinks}>
            <button className={styles.bannerButtons}>
              <span className={styles.navLinks}>Create Collection</span>
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <Image className="img-fluid" src={Circle} alt="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
