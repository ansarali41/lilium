import { Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/navbar.module.css';
import logo from '../assest/images/logo-tranparent.png';
import Image from 'next/image';
import Link from 'next/link';

const MyNavbar = () => {
  return (
    <Navbar bg='transparent' expand='lg' className={styles.container}>
      <Navbar.Brand href='#home'>
        <Image
          src={logo}
          alt='Picture of the author'
          width={300}
          height={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='d-flex justify-content-end'>
        <Nav className='ml-auto'>
          <Nav.Item className={styles.navContainer}>
            <Link href='/' className={styles.navLinks}>
              
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
