import React from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import shield from '../../assest/images/shield-blue (1).png';
import bolt from '../../assest/images/bolt (1).png';
import laptop from '../../assest/images/solid II.png';
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
          <span>
            {' '}
            <Image src={shield} alt="" />{' '}
            <Image style={{ marginLeft: '270px' }} src={bolt} alt="" />{' '}
          </span>
          <p className="text-light mt-4">
            Protected by smart contracts
            <span className="m-5 p-3">Hassle Free</span>
          </p>
          <p className={styles.sellText}>
            Powered by Ergo Blockchain
            <span className="m-5 p-5">Get setup in a few clicks</span>
          </p>
        </div>
        <div className="col-md-6">
          <Image
            className="img-fluid"
            style={{ marginTop: '64px' }}
            src={laptop}
            alt="man"
          />
        </div>
      </div>
    </div>
  );
};

export default SellBanner;
