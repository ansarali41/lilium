import React from 'react';
import submitStyles from '../../styles/Submit.module.css';
import navStyle from '../../styles/navbar.module.css';
import Link from 'next/link';
import { useLocation, useParams } from 'react-router-dom';
import { useRouter } from 'next/router';

const UploadHeader = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <div className='col-12 col-md-2'>
      <ul className={submitStyles.list}>
        <li className={submitStyles.listLinks}>
          {pathname === '/submit' ?
            <Link href='/submit' className={navStyle.sideBarLink} style={{ color: '#FFD363' }}>
              CREATE COLLECTION
            </Link> :
            <Link href='/submit' className={navStyle.sideBarLink}>
              CREATE COLLECTION
            </Link>}
        </li>
        <li className={submitStyles.listLinks}>
          {pathname === '/uploads' ?
            <Link href='/uploads' className={navStyle.sideBarLink} style={{ color: '#FFD363' }}>
              Upload files
            </Link> :
            <Link href='/uploads' className={navStyle.sideBarLink}>
              Upload files
            </Link>}
        </li>
        <li className={submitStyles.listLinks}>
          {pathname === '/payment' ?
            <Link href='/payment' className={navStyle.sideBarLink} style={{ color: '#FFD363' }}>
              PAYMENT
            </Link> :
            <Link href='/payment' className={navStyle.sideBarLink}>
              PAYMENT
            </Link>}
        </li>
      </ul>

    </div>
  );
};

export default UploadHeader;