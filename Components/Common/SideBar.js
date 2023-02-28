import React from 'react';
import submitStyles from '../../styles/Submit.module.css';
import navStyle from '../../styles/navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
  const { pathname } = useRouter();
  return (
    <div className='col-6 col-md-3'>
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

export default SideBar;