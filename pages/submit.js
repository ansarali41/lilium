import React from 'react';
import styles from '../styles/Home.module.css';
import submitStyles from '../styles/Submit.module.css';
import Header from '../Components/Header';


const MyComponent = () => {
  return (
    <div className={styles.body}>
      <Header />
      <div className='row p-3'>
        <div className='col-md-3'>
          <ul className={submitStyles.list}>
            <li className={submitStyles.listLinks}>Create collection</li>
            <li className={submitStyles.listLinks}>Upload files</li>
            <li className={submitStyles.listLinks}>PAYMENT</li>
          </ul>
        </div>
        <div className='col-md-9'>
          <h1 className={submitStyles.title}>Create your collection</h1>
          <h2>Collection Details</h2>
          <p>The ‘Collection name’ and ‘Description’ are written to the blockchain and can’t be changed after minting.
            They are always shown when the collection is displayed, for example when it’s listed on the marketplace.</p>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
