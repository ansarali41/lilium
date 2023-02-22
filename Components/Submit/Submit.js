import React, { useState } from 'react';
import UploadHeader from '../Common/UploadHeader';
import uploadStyles from '../../styles/Upload.module.css';
import submitStyles from '../../styles/Submit.module.css';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
// import ellipse from '../../assest/images/';
import circle from '../../assest/images/circle.svg';
import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons';
import { FaRegDotCircle } from 'react-icons/fa';
import ProgressBar from './ProgressBar';

const Submit = () => {
  const inputStyle = submitStyles.input;
  const [socialDivs, setSocialDivs] = useState([]);
  const [address, setAddress] = useState([]);
  const [progress, setProgress] = useState(0);

  // add more button code for social div

  const socialDiv = <div className='row'>
    <div className='col-12 col-md-4'>
      <input
        className={`${inputStyle} w-100`}
        type='text'
        placeholder="enter social name ex: Twitter'"
      />
    </div>
    <div className='col-12 col-md-8 '>
      <input
        className={`${inputStyle} w-100`}
        type='text'
        placeholder='Enter Correnponding Link'
      />
    </div>
  </div>;


  const handleSocialField = () => {
    setSocialDivs([...socialDivs, socialDiv]);
  };

  // add more button for address

  const targetAddress = <input
    className={`${inputStyle} w-100`}
    type='text'
    placeholder='Enter Address'
  />;

  const handleAddress = () => {
    setAddress([...address, targetAddress]);
  };


  return (
    <div className='row px-5 '>
      <UploadHeader />

      <div className={`${uploadStyles.uploadContainer} col-12 col-md-8`}>
        <h1 className={submitStyles.title}>CREATE YOUR COLLECTIONS</h1>
        <h2 className={submitStyles.subTitle}>
          <b>COLLECTIONS DETAILS</b>
        </h2>
        <p className={submitStyles.text}>
          The ‘Collection name’ and ‘Description’ are written to the blockchain and can’t be <br /> changed after
          minting. They are always shown when the collection is displayed, <br /> for example when it’s listed on the
          marketplace.

        </p>
        <input
          className={`${inputStyle} w-100`}
          type='text'
          placeholder='Collection category'
        />
        <input
          className={`${inputStyle} w-100`}
          type='text'
          placeholder='Collection logo url'
        />
        <input
          className={`${inputStyle} w-100`}
          type='text'
          placeholder='Collection featured image url'
        />
        <input
          className={`${inputStyle} w-100`}
          type='text'
          placeholder="Collection banner image url'"
        />

        {/* SOCIAL PART START */}

        <h2 className={submitStyles.subTitle}>Socials</h2>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <input
              className={`${inputStyle} w-100`}
              type='text'
              placeholder="enter social name ex: Twitter'"
            />
          </div>
          <div className='col-12 col-md-8'>
            <input
              className={`${inputStyle} w-100`}
              type='text'
              placeholder='Enter Correnponding Link'
            />
          </div>
          <div className='col-12 col-md-4'>
            <input
              className={`${inputStyle} w-100`}
              type='text'
              placeholder='enter social name ex: Twitter'
            />
          </div>
          <div className='col-12 col-md-8'>
            <input
              className={`${inputStyle} w-100`}
              type='text'
              placeholder='Enter Correnponding Link'
            />
          </div>
          {socialDivs}
        </div>
        <button onClick={handleSocialField} className={submitStyles.button}>Add more</button>
        <hr className='my-5' />

        {/* ROYALITIES PART START */}

        <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

        <p className={submitStyles.text}>
          Every time an NFT gets sold, the original owner receives a percentage
          of the sale <br /> price. You can set the amount here, and the
          payments will execute automatically.
        </p>
        <div className='d-flex justify-content-between fs-3 mt-5'>
          <p className=''>Amount</p>
          <p className=''>{progress} %</p>
        </div>
        <ProgressBar progress={progress} setProgress={setProgress} />

        <input
          className={`${inputStyle} w-100`}
          type='text'
          placeholder='Enter Address'
        />
        {address}
        <button onClick={handleAddress} className={submitStyles.button}>Add more</button>
        <hr className='my-5' />

        {/* MINT PRICE PART START */}

        <h2 className={submitStyles.subTitle}>set mint price</h2>

        <div className='d-flex justify-content-between align-items-center'>
          <h2 className={submitStyles.subTitle}>MINT START</h2>
          <div className='d-flex'>
            <p className={submitStyles.mintText}>February 14,2023</p>
            <p className={submitStyles.mintText}>6.00 am</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className={submitStyles.subTitle}>MINT EXPIARY</h2>
          <div className='d-flex'>
            <p className={submitStyles.mintText}>February 14,2023</p>
            <p className={submitStyles.mintText}>6.00 am</p>
          </div>
        </div>

        <div className='d-flex '>
          <FaRegDotCircle className='fs-3 text-primary me-3' />
          <p className='d-flex align-items-center pt-1 fw-bold'> Never Expire</p>
        </div>


        <div className='d-flex justify-content-between align-items-center'>
          <h2 className={submitStyles.subTitle}>ON SALE END</h2>
          <div className='d-flex'>
            <p className={submitStyles.mintText}>Collection token Burn</p>
            <p className={submitStyles.mintText}>Collection token Return</p>
          </div>
        </div>
      </div>

      <div className={` ${uploadStyles.button} d-flex justify-content-center`}>
        <Button variant='primary' className={submitStyles.nextButton}>NEXT</Button>

      </div>
    </div>
  );
};

export default Submit;
