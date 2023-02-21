import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import laptop from '../../assest/images/laptop man.jpeg';
const SellBanner = () => {
  return (
    <div className="container">
      <div className={styles.sellBanner}>
        <h1>
          SELL NFTS THE WAY
          <br /> YOU WANT
        </h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <span className={styles.sellBannerHeading}>NFT Sale Platform</span>
          <h2 className={styles.sellBannerHeaderText}>
            We do the tech, so you
            <br /> can focus on the
            <br /> quality of your content
          </h2>
          <p className="text-light">
            Protected by smart contracts
            <span className="m-5 p-3">Hassle Free</span>
          </p>
          <p className={styles.sellText}>
            Powered by Ergo Blockchain
            <span className="m-5 p-5">Get setup in a few clicks</span>
          </p>
        </div>
        <div className="col-md-6">
          <Image src={laptop} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default SellBanner;
