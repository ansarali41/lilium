import React from 'react';
import styles from '../../styles/navbar.module.css';
import Link from 'next/link';

const HomeCollection = () => {
  return (
    <div className={styles.homeCollection}>
      <div className='pt-5'>
        <h1 className={styles.homeCollectionHeader}>
          KICKSTART YOUR NFT COLLECTION
          <br /> WITH LILIUM
        </h1>
      </div>

      <p className={styles.homeCollectionText}>
        LILIUM is a next-generation smart contract platform through which each
        your audience by using our SaaS <br /> solutions to build your own
        custom white label NFT marketplace.
      </p>

      <div className='text-center'>
        <Link href='/create-collection' className={styles.sideBarLink}>
          <button className='text-white font-bold rounded-xl'
                  style={{ background: '#E041E7', padding: '22px 32px' }}>
            CREATE COLLECTION
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCollection;
