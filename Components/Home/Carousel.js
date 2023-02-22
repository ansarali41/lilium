//import Image from 'next/image';
//import styles from '../../styles/navbar.module.css';
//import Man from '../../assest/images/image 15.png';
import React from 'react';
import Carousel from 'react-elastic-carousel';
//import styles from '../styles/Elastic.module.css';
import { items } from './Items.json';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
const Carousels = () => {
  const { elastic } = items;

  return (
    <div className={styles.container}>
      <div>
        <h1>React Elastic Carousel Example</h1>
      </div>
      <hr className={styles.seperator} />
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints}>
          {elastic.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className={styles.title}>
                <h3>{item.title} </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;
