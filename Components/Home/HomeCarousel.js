import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Man from '../../assest/images/image 15.png';
import Image from 'next/image';
import Arro from '../../assest/images/rightarray (1).jpeg';
const HomeCarousel = () => {
  return (
    <div
      className="container"
      style={{
        height: '594px',
        width: '1192px',
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
        }}
        className="text-center"
      >
        WHAT OTHERS SAY
      </h2>

      <Carousel>
        <div
          style={{
            width: '1192px',
            height: '454px',
            // marginTop: '124px',
            borderRadius: '8px',
            padding: '24px',
          }}
        >
          <span style={{ float: 'left' }}>
            <Image
              src={Arro}
              alt=""
              style={{ width: '15px', height: '36px' }}
            />
          </span>
          <br />
          <p
            style={{
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '60px',
            }}
            className="text-center"
          >
            Lilium is the foundation that builders can build on. [...] If you
            run into trouble at any point, their incredible support team is
            there to help.”
          </p>
          <span style={{ float: 'right' }}>
            <Image
              src={Arro}
              alt=""
              style={{ width: '15px', height: '36px' }}
            />
          </span>
          <div className="">
            <Image
              src={Man}
              alt="image1"
              style={{ height: '132px', width: '132px' }}
            />
            <br />
            <p
              style={{
                fontWeight: '400',
                fontSize: '24px',
              }}
              className="legend"
            >
              RJ Regenold, CTO @ BOOK.IO
            </p>
          </div>
        </div>
        <div>
          <span style={{ float: 'left' }}>
            <Image
              src={Arro}
              alt=""
              style={{ width: '15px', height: '36px' }}
            />
          </span>
          <br />
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
            alt="image2"
            style={{ height: '132px', width: '132px' }}
          />
          <span style={{ float: 'right' }}>
            <Image
              src={Arro}
              alt=""
              style={{ width: '15px', height: '36px' }}
            />
          </span>
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p>
        </div>
        <div>
          <span style={{ float: 'left' }}>
            <Image
              src={Arro}
              alt=""
              style={{ width: '15px', height: '36px' }}
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
            <Image
              src={Arro}
              alt=""
              style={{ width: '15px', height: '36px' }}
            />
          </span>
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
