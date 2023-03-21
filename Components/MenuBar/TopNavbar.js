import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ErgoDappConnector } from '../Requirements';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import logo from '../../assest/images/llium-assets/LiliumWhiteLogo.svg';
import lightIcon from '../../assest/images/llium-assets/sun.svg';
import navStyle from '../../styles/navbar.module.css';
import submitStyles from '../../styles/Submit.module.css';

export default function App({ ergopay }) {
  const [visible, setVisible] = useState(true);
  const [ergoPay, setErgoPay] = ergopay;
  const [walletButton, setWalletButton] = useState(true);
  useEffect(() => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setWalletButton(<ErgoDappConnector ergopayProps={[ergoPay, setErgoPay]} color={'purple'} />);
    }
  }, []);

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const cls = visible ? 'visible' : 'hidden';

  return (

    <Navbar collapseOnSelect expand='lg' bg='transparent' variant='dark' className={styles.container}>
      <Navbar.Brand>
        <Link href='/' className={styles.navLinks}>
          <Image
            src={logo}
            alt='logo'
            width={300}
            height={50}
          />
        </Link>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Link href='/pay' className={styles.navLinks}>
              <button type='submit' className={submitStyles.navButton}>PAY</button>
            </Link>
          </Nav>
          {walletButton}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
