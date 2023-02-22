import React from 'react';
import submitStyles from '../../styles/Submit.module.css';
import navStyle from '../../styles/navbar.module.css';
import Link from 'next/link';

const UploadHeader = () => {
  return (
    <div className='col-12 col-md-3'>
      <ul className={submitStyles.list}>
        <li className={submitStyles.listLinks}>
          <Link href='/submit' className={navStyle.sideBarLink}>
            Create collection
          </Link>
        </li>
        <li className={submitStyles.listLinks}>
          <Link href='/uploads' className={navStyle.sideBarLink}>
            Upload files
          </Link>
        </li>
        <li className={submitStyles.listLinks}>PAYMENT</li>
      </ul>

    </div>
  );
};

export default UploadHeader;