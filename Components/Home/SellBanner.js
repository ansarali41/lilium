import React from 'react';
import styles from '../../styles/navbar.module.css';
const SellBanner = () => {
  return (
    <div className="container">
      <h1 className={styles.sellBannerText}>
        Sell NFTs the way <br />
        you want
      </h1>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default SellBanner;
