import { Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/navbar.module.css';
import logo from '../assest/images/logo-tranparent.png';
import lightIcon from '../assest/images/light_mode.png';
import Image from 'next/image';
import Link from 'next/link';

const MyNavbar = () => {
  return (
    <Navbar bg='transparent' expand='lg' className={styles.container}>
      <Navbar.Brand href='/'>
        <Image
          src={logo}
          alt='logo'
          width={300}
          height={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='d-flex justify-content-end'>
        <Nav className='ml-auto'>
          <Nav.Item className={styles.navContainer}>
            <Link href='/' className={styles.navLinks}>
              <Image
                src={lightIcon}
                alt='Picture of the author'
                className={styles.lightIconStyle}
                width={32}
                height={32}
              />
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.navContainer}>
            <Link href='/' className={styles.navLinks}>
              HOME
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#link' className={styles.navLinks}>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#about' className={styles.navLinks}>BLOG</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default MyNavbar;
