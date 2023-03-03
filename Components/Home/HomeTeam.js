import Image from 'next/image';
import React from 'react';
import Team1 from '../../assest/images/team/Ellipse 177.svg';
import Team2 from '../../assest/images/team/Ellipse 177 (1).svg';
import Twitter from '../../assest/images/team/Vector.svg';
import styles from '../../styles/navbar.module.css';

const HomeTeam = () => {
  return (
    <div className='row'>
      <h1 className={styles.homeTeamHeader}>TEAM</h1>
      <div className='col-md-5 m-auto'>
        <div className='d-flex justify-content-between'>
          <div>

            <Image alt='a' style={{ paddingTop: '56px' }} src={Team2} className='m-auto' />
            <h3 style={{
              paddingTop: '12px', paddingBottom: '6px', fontWeight: 800,
              fontSize: '18px',
              lineHeight: '21px',
              textAlign: 'center',
            }}>
              CRYPTO QUOKKA
            </h3>
            <p style={{ color: ' #5D7789', fontWeight: 600, fontFamily: `'Inter', sans-serif` }}
               className='text-center'>
              Founder
              <br />
              <span className='text-center'>
                Project Manager & Frontend Dev
              </span>
            </p>
            <Image alt='a' className='m-auto' src={Twitter} />
          </div>

          <div>
            <Image alt='a' style={{ paddingTop: '56px' }} src={Team1} className='m-auto' />
            <h3 style={{
              paddingTop: '12px', paddingBottom: '6px', fontWeight: 800,
              fontSize: '18px',
              lineHeight: '21px',
              textAlign: 'center',
            }}>
              GUY HAWKINS
            </h3>
            <p style={{ color: ' #5D7789', fontWeight: 600, fontFamily: `'Inter', sans-serif` }}>Blockchain & Backend
              Dev</p>
            <Image alt='a' className='m-auto' src={Twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
