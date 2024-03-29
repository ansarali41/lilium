import React from 'react';
import NavContainer from '../Components/navContainer/NavContainer';
import HomeFooter from '../Components/Home/HomeFooter';
import styles from '../styles/Home.module.css';
import SideBar from '../Components/Common/SideBar';
import uploadStyles from '../styles/Upload.module.css';
import Image from 'next/image';
import liliumFee from '../assest/images/llium-assets/Lilium_Checkout_Flower.svg';
import contractFee from '../assest/images/llium-assets/Lilium_Checkout_Contract.svg';
import TX from '../assest/images/llium-assets/Lilium_Checkout_Money.svg';
import ergoIcon from '../assest/images/checkout/ergo-icon.svg';
import Link from 'next/link';
import navbarStyle from '../styles/navbar.module.css';

const Payment = () => {
  return (
    <div className={`${styles.body} ${styles.bodyContainer}`}>
      <NavContainer />
      <div className={styles.mainContent}>
        <div className="row px-3">
          <SideBar />
          <div
            className={`${uploadStyles.uploadContainer} col-12 col-md-7 mb-5`}
          >
            <h1>CHECKOUT</h1>
            {/*1st item*/}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: 20 }}
            >
              <div className="d-flex align-items-center">
                <Image src={liliumFee} alt="l" className="me-4" />
                <h3>LILIUM FEE</h3>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ marginTop: 20 }}
              >
                <div style={{ marginTop: '-9px', marginRight: 13 }}>
                  <Image src={ergoIcon} alt="ergoIcon" />
                </div>
                <h3 className={navbarStyle.paymentNumber}>8</h3>
              </div>
            </div>
            {/*2nd item*/}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: 30 }}
            >
              <div className="d-flex align-items-center">
                <Image src={TX} alt="l" className="me-4" />
                <h3>TX OPERATOR FEE</h3>
              </div>
              <div className="d-flex align-items-center">
                <div style={{ marginTop: '-9px', marginRight: 13 }}>
                  <Image src={ergoIcon} alt="ergoIcon" />
                </div>
                <h3 className={navbarStyle.paymentNumber}>1</h3>
              </div>
            </div>

            {/*3nd item*/}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: 30, marginBottom: 40 }}
            >
              <div className="d-flex align-items-center">
                <Image src={contractFee} alt="l" className="me-4" />
                <h3>CONTRACT FEE</h3>
              </div>
              <div className="d-flex align-items-center">
                <div style={{ marginTop: '-9px', marginRight: 13 }}>
                  <Image src={ergoIcon} alt="ergoIcon" />
                </div>
                <h3 className={navbarStyle.paymentNumber}>1</h3>
              </div>
            </div>
            <hr style={{ borderBottom: '1px solid #E0E0E0' }} />
            {/*total*/}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: 30, marginBottom: 40 }}
            >
              <div className="d-flex align-items-center">
                <h3>TOTAL</h3>
              </div>
              <div className="d-flex align-items-center">
                <div style={{ marginTop: '-9px', marginRight: 13 }}>
                  <Image src={ergoIcon} alt="ergoIcon" />
                </div>
                <h3 className={navbarStyle.paymentNumber}>9</h3>
              </div>
            </div>

            <Link
              href="/payment"
              className={`${navbarStyle.navLinks} d-flex justify-content-center`}
            >
              <button className={navbarStyle.payButton}>
                <span className={navbarStyle.navLinks}>PAY NOW</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <HomeFooter />
      </div>
    </div>
  );
};

export default Payment;
