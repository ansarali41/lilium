import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import NavContainer from '../Components/navContainer/NavContainer';
import HomeFooter from '../Components/Home/HomeFooter';
import Link from 'next/link';
import navStyle from '../styles/navbar.module.css';
import submitStyles from '../styles/Submit.module.css';

const Pay = () => {
  const [formValue, setFormValue] = useState({});

  // form submission handler
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className={`${styles.body} ${styles.bodyContainer}`}>
      <NavContainer />
      <div className={styles.mainContent}>
        <div
          style={{ fontFamily: `'Inter', sans-serif` }}
          className={`row d-flex justify-content-center`}
        >
          <form
            className={` col-md-6 ${submitStyles.createCollectionContainer}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className={submitStyles.nftTitle}>Buy NFT</h1>
            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="text"
                id="proxy_address"
                onChange={(e) => handleFormData(e)}
                name="proxyAddress"
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Description"
              />
              <label
                htmlFor="proxy_address"
                className="absolute text-sm text-white-500 text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Proxy Address
              </label>
            </div>

            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="text"
                id="single_ton_id"
                onChange={(e) => handleFormData(e)}
                name="SingleTonId"
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Description"
              />
              <label
                htmlFor="single_ton_id"
                className="absolute text-sm text-white-500 text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                SingleTon id
              </label>
            </div>

            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="number"
                id="NFT_price"
                onChange={(e) => handleFormData(e)}
                defaultValue={formValue?.collectionFeaturedImageUrl || ''}
                name="NFTPrice"
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Description"
              />
              <label
                htmlFor="NFT_price"
                className="absolute text-sm text-white-500 text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                NFT Price
              </label>
            </div>
          </form>
          <div className={` d-flex justify-content-center me-2`}>
            <Link href="#" className={navStyle.navLinks}>
              <button type="submit" className={submitStyles.payButton}>
                Pay
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

export default Pay;
