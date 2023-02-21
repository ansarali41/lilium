import React from 'react';
import styles from '../../styles/navbar.module.css';
const HomeCollection = () => {
  return (
    <div className={styles.homeCollection}>
      <div className="pt-5">
        <h1 className={styles.homeCollectionHeader}>
          Kickstart your NFT collection
          <br /> with Lilium
        </h1>
      </div>

      <p className={styles.homeCollectionText}>
        LILIUM is a next-generation smart contract platform through which each
        your audience by using our SaaS
        <br /> solutions to build your own custom white label NFT marketplace.
      </p>
      <div className="text-center">
        <button className={styles.bannerButtons}>create collection</button>
      </div>
    </div>
  );
};

export default HomeCollection;
