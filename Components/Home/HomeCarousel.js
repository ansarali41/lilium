import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Man from '../../assest/images/image 15.png';
import Image from 'next/image';
const HomeCarousel = () => {
  return (
    <div
      className="container"
      style={{ height: '594px', width: '1192px', borderRadius: '8px' }}
    >
      <h2
        style={{ fontSize: '64px', lineHeight: '74px', fontWeight: '800' }}
        className="text-center"
      >
        What others say
      </h2>
      <p
        style={{ fontSize: '36px', fontWeight: '700', lineHeight: '60px' }}
        className="text-center"
      >
        Lilium is the foundation that builders can build on. [...] If you run
        into trouble at any point, their incredible support team is there to
        help.”
      </p>

      <Carousel>
        <div style={{ width: '1139px', height: '36px' }}>
          <Image
            src={Man}
            alt="image1"
            style={{ height: '132px', width: '132px' }}
          />
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p>
        </div>
        <div>
          <Image
            src={Man}
            alt="image2"
            style={{ height: '132px', width: '132px', marginBottom: '130px' }}
          />
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p>
        </div>
        <div>
          <Image
            src={Man}
            alt="image3"
            style={{ height: '132px', width: '132px' }}
          />
          <p style={{ fontWeight: '400', fontSize: '24px' }} className="legend">
            RJ Regenold, CTO @ BOOK.IO
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
