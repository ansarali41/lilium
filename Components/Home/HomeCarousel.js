import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from '../../styles/navbar.module.css';
import Man from '../../assest/images/image 15.png';
import Image from 'next/image';
import RightArro from '../../assest/images/r3.png';
import LeftArro from '../../assest/images/l1.png';
//import { FaQuoteRight, FaQuoteLeft, Faquo } from 'react-icons/fa';
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

      <Carousel showThumbs={false}>
        <div
          style={{
            height: '530px',
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#151720',
          }}
        >
          <span style={{ float: 'left' }}>
            <Image
              className={styles.carouselQ}
              src={LeftArro}
              alt='working flow'
              width={72}
              height={72}
            />
            {/* <FaQuoteLeft className={styles.carouselQ} /> */}
          </span>

          <p
            style={{
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '60px',
              paddingTop: '54px',
            }}
            className='text-center'
          >
            Lilium is the foundation that builders can build on. [...] If you
            run <br /> into trouble at any point, their incredible support team is
            there to <br /> help.”
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

          <div className=''>
            <Image
              src={Man}
              alt='image1'
              style={{ height: '132px', width: '132px' }}
            />
            <br />
            <p
              style={{
                fontWeight: '400',
                fontSize: '24px',
              }}
              className='legend'
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
        </div>
        <div
          style={{
            height: '500px',
            // marginTop: '124px',
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#151720',
          }}
        >
          <span style={{ float: 'left' }}>
            <Image
              className={styles.carouselQ}
              src={LeftArro}
              alt='working flow'
              width={72}
              height={72}
            />
            {/* <FaQuoteLeft className={styles.carouselQ} /> */}
          </span>

          <p
            style={{
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '60px',
              paddingTop: '54px',
            }}
            className='text-center'
          >
            Lilium is the foundation that builders can build on. [...] If you
            run into trouble at any point, their incredible support team is
            there to <br />
            help.”
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

          <div className=''>
            <Image
              src={Man}
              alt='image1'
              style={{ height: '132px', width: '132px' }}
            />
            <br />
            <p
              style={{
                fontWeight: '400',
                fontSize: '24px',
              }}
              className='legend '
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
        </div>
        <div
          style={{
            height: '500px',
            // marginTop: '124px',
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#151720',
          }}
        >
          <span style={{ float: 'left' }}>
            <Image
              className={styles.carouselQ}
              src={LeftArro}
              alt='working flow'
              width={72}
              height={72}
            />
            {/* <FaQuoteLeft className={styles.carouselQ} /> */}
          </span>

          <p
            style={{
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '60px',
              paddingTop: '54px',
            }}
            className='text-center'
          >
            Lilium is the foundation that builders can build on. [...] If you
            run into trouble at any point, their incredible support team is
            there to <br />
            help.”
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

          <div className=''>
            <Image
              src={Man}
              alt='image1'
              style={{ height: '132px', width: '132px' }}
            />
            <br />
            <p
              style={{
                fontWeight: '400',
                fontSize: '24px',
              }}
              className='legend '
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
        </div>

        {/* <div
          style={{
            height: '500px',
            // marginTop: '124px',
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#151720',
          }}
        >
          <span style={{ float: 'left' }}>
            <i class="fa fa-quote-right" aria-hidden="true"></i>
            <Image
              className={styles.carouselQ}
              src={LeftArro}
              alt="working flow"
              width={72}
              height={72}
            />
          </span>
          <br />
          <p
            style={{ fontSize: '36px', fontWeight: '700', lineHeight: '60px' }}
            className="text-center"
          >
            Lilium is the foundation that builders can build on. [...] If you
            run into trouble at any point, their incredible support team is
            there to <br />
            help.”
          </p>
          <Image
            src={Man}
            alt="image2"
            style={{ height: '132px', width: '132px' }}
          />
          <span style={{ float: 'right' }}>
            <Image
              className={styles.carouselQ}
              src={RightArro}
              alt="working flow"
              width={72}
              height={72}
            />
          </span>
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p>
        </div> */}
        {/* <div>
          <span style={{ float: 'left' }}>
            {/* <FaQuoteLeft style={{ height: '48px', width: '27px' }} /> */}
        {/* <Image
              className={styles.carouselQ}
              src={LeftArro}
              alt="working flow"
              width={72}
              height={72}
            />
          </span>
          <p
            style={{ fontSize: '36px', fontWeight: '700', lineHeight: '60px' }}
            className="text-center"
          >
            Lilium is the foundation that builders can build on. [...] If you
            run into trouble at any point, their incredible support team is
            there to help.”
          </p>
          <Image
            src={Man}
            alt="image3"
            style={{ height: '132px', width: '132px' }}
          />
          <span style={{ float: 'right' }}>
            {/* <FaQuoteRight className={styles.carouselQ} /> */}
        {/* <Image
              className={styles.carouselQ}
              src={RightArro}
              alt="working flow"
              width={72}
              height={72}
            />
          </span>
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p> */}
        {/* </div>  */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
