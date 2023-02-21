import React from 'react';
import styles from '../../styles/navbar.module.css';
const Banner = () => {
  return (
    <div className="row">
      <div className="col-md-6">
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
        <button className={styles.bannerButtons}>Create Collection</button>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Banner;
