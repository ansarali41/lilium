import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../../styles/navbar.module.css';
import Man from '../../assest/images/image 15.svg';
import Image from 'next/image';
import RightArro from '../../assest/images/r3.png';
import LeftArro from '../../assest/images/l1.png';

const HomeCarousel = () => {
  return (
    <div
      className='container'
      style={{
        borderRadius: '8px',
        marginTop: '134px',
      }}
    >
      <h2
        style={{
          marginTop: '15px',
          fontSize: '64px',
          lineHeight: '74px',
          fontWeight: '800',
          padding: '24px',
          marginBottom: '60px',
        }}
        className='text-center'
      >
        WHAT OTHERS SAY
      </h2>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div
          className='carousel-inner'
          style={{
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#151720',
          }}
        >
          <div className='carousel-item active'>
            <span style={{ float: 'left' }}>
              <Image
                className={styles.carouselQ}
                src={LeftArro}
                alt='working flow'
                width={72}
                height={72}
              />
            </span>

            <p className={styles.carouselTitle}>
              Lilium is the foundation that builders can build on. [...] If you
              run into trouble at any point, their incredible support team is
              there to help.”
            </p>
            <span style={{ float: 'right' }}>
              <Image
                className={styles.carouselQ}
                src={RightArro}
                alt='working flow'
                width={72}
                height={72}
              />
            </span>
            <Image
              src={Man}
              style={{ width: '132px', height: '132px' }}
              className='d-block w-100'
              alt='...'
            />

            <p
              className='text-center pt-4'
              style={{
                fontWeight: '400',
                fontSize: '24px',
                fontFamily: `'Inter', sans-serif`,
              }}
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
          <div className='carousel-item'>
            <span style={{ float: 'left' }}>
              <Image
                className={styles.carouselQ}
                src={LeftArro}
                alt='working flow'
                width={72}
                height={72}
              />
            </span>
            <p className={styles.carouselTitle}>
              Lilium is the foundation that builders can build on. [...] If you
              run into trouble at any point, their incredible support team is
              there to help.”
            </p>
            <span style={{ float: 'right' }}>
              <Image
                className={styles.carouselQ}
                src={RightArro}
                alt='working flow'
                width={72}
                height={72}
              />
            </span>
            <Image
              style={{ width: '132px', height: '132px' }}
              src={Man}
              className='d-block w-100'
              alt='...'
            />
            <p
              className='text-center pt-4'
              style={{
                fontWeight: '400',
                fontSize: '24px',
                fontFamily: `'Inter', sans-serif`,
              }}
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
          <div className='carousel-item'>
            <span style={{ float: 'left' }}>
              <Image
                className={styles.carouselQ}
                src={LeftArro}
                alt='working flow'
                width={72}
                height={72}
              />
            </span>
            <p className={styles.carouselTitle}>
              Lilium is the foundation that builders can build on. [...] If you
              run into trouble at any point, their incredible support team is
              there to help.”
            </p>
            <span style={{ float: 'right' }}>
              <Image
                className={styles.carouselQ}
                src={RightArro}
                alt='working flow'
                width={72}
                height={72}
              />
            </span>
            <Image
              style={{ width: '132px', height: '132px' }}
              src={Man}
              className='d-block w-100'
              alt='...'
            />
            <p
              className='text-center pt-4'
              style={{
                fontWeight: '400',
                fontSize: '24px',
                fontFamily: `'Inter', sans-serif`,
              }}
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
